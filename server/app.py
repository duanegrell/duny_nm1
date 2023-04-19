from flask import Flask, make_response, request, jsonify, abort, session
from flask_migrate import Migrate
from flask_restful import Api, Resource

from werkzeug.exceptions import NotFound, Unauthorized
from flask_cors import CORS

from models import db, User, Diagnosis, Question, StudentResponse, Post, Powerpoint

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.config['SECRET_KEY'] = "abcd"


api = Api(app)
db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

#/users
class Users(Resource):
    #GET
    def get(self):
        return make_response([user.to_dict() for user in User.query.all()], 31)

    #POST
    def post(self):
        try:
            r_json = request.get_json()
            new_user = User(
                first_name = r_json['first_name'],
                last_name = r_json['last_name'],
                email = r_json['email'],
                password = r_json['password']
            )

            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id

            return make_response(jsonify(new_user.to_dict()), 201)
        
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

api.add_resource(Users, '/users')

#/users/:id
class UserById(Resource):
    #GET
    def get(self, id):
        user = User.query.filter_by(id = id).first()

        if not user:
            return make_response({'error': 'User Not Found!'}, 404)

        return make_response(user.to_dict(), 200)

    #PATCH
    def patch(self, id):
        user = User.query.filter_by(id= id).first()

        if not user:
            return make_response({'error': 'User Not Found!' }, 404)

        try: 
            r_json = request.get_json()
            for key in r_json:
                setattr(user, key, r_json[key])
        
            db.session.add(user)
            db.session.commit()

            return make_response(user.to_dict(), 200)
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

    #DELETE
    def delete(self, id):
        user = User.query.filter_by(id = id).first()

        if not user:
            return make_response({'error': 'User Not Found!'}, 404)
     
        db.session.delete(user)
        db.session.commit()

        return make_response('', 204)

api.add_resource(UserById, '/users/<int:id>')

#/diagnoses
class Diagnoses(Resource):
    #GET
    def get(self):
        return make_response(jsonify([diagnosis.to_dict() for diagnosis in Diagnosis.query.all()]), 5)

    #POST
    def post(self):
        try:
            r_json = request.get_json()
            new_diagnosis = Diagnosis(
                name = r_json['name'],
                background = r_json['background'],
                presentation = r_json['presentation'],
                medication = r_json['medication'],
                imaging = r_json['imaging'],
                intevention = r_json['intevention'],
                case = r_json['intevention']
            )

            db.session.add(new_diagnosis)
            db.session.commit()

            return make_response(jsonify(new_diagnosis.to_dict()), 201)
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

api.add_resource(Diagnoses, '/diagnoses')

#/diagnosis/:id
class DiagnosisbyID(Resource):
    #GET
    def get(self, id):
        return make_response(Diagnosis.query.filter_by(id = id).first().to_dict(), 5)

    #PATCH
    def patch(self, id):
        diagnosis = Diagnoses.query.filter_by(id = id).first()

        if not diagnosis:
            return make_response({ 'error': 'Diagnosis Not Found!'}, 404)

        try:
            r_json = request.get_json()
            for key in r_json:
                setattr(diagnosis, key, r_json[key])
        
            db.session.add(diagnosis)
            db.session.commit()

            return make_response(diagnosis.to_dict(), 200)
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

    #DELETE
    def delete(self, id):
        diagnosis = Diagnosis.query.filter_by(id = id).first()

        if not diagnosis:
            return make_response({'error': 'diagnosis Not Found!'}, 404)
        
        db.session.delete(diagnosis)
        db.session.commit()

        return make_response('', 204)

api.add_resource(DiagnosisbyID, '/diagnosis/<int:id>')

#/posts
class Posts(Resource):

    #GET
    def get(self):
        return make_response([post.to_dict() for post in Post.query.all()], 50)

    #POST
    def post(self):
        try:
            r_json = request.get_json()
            new_post = Post(
                topic = r_json['topic'],
                title = r_json['title'],
                body = r_json['body'],
                # user_id = r_json['user_id']
            )

            db.session.add(new_post)
            db.session.commit()

            return make_response(jsonify(new_post.to_dict()), 201)
        
        except ValueError as e:
            return make_response({'error': e.__str__()}, 400)

api.add_resource(Posts, '/posts')

#/posts/:id
class PostsById(Resource):

    #GET
    def get(self, id):
        return make_response(Post.query.filter_by(id = id).first().to_dict(), 5)

    #DELETE
    def delete(self, id):
        post = Post.query.filter_by(id = id).first()

        if not post:
            return make_response({'error': 'Post Not Found!'}, 404)
        
        db.session.delete(post)
        db.session.commit()

        return make_response('', 204)

api.add_resource(PostsById, '/posts/<int:id>')


#/questions
class Questions(Resource):
    #GET
    def get(self):
            return make_response(jsonify([question.to_dict() for question in Question.query.all()]), 50)

api.add_resource(Questions, '/questions')

#/powerpoints
class Powerpoints(Resource):
    #GET
    def get(self):
            return make_response(jsonify([powerpoint.to_dict() for powerpoint in Powerpoint.query.all()]))

api.add_resource(Powerpoints, '/powerpoints')


#/student responses
class StudentResponses(Resource):
    #GET
    def get(self):
            return make_response(jsonify([student_response.to_dict() for student_response in StudentResponse.query.all()]), 50)

api.add_resource(StudentResponses, '/studentresponses')

#Login
class Login(Resource):
    def post(self):
        user = User.query.filter_by(first_name=request.get_json()['first_name']).first()
        
        if not user:
            return make_response({'error': 'Invalid Username/Password'}, 403)

        session['user_id'] = user.id
        response = make_response(
            user.to_dict(),
            200
        )
        return response
api.add_resource(Login, '/login')


#Logout
class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        response = make_response('',204)
        return response

api.add_resource(Logout, '/logout')


#Authorization
class AuthorizedSession(Resource):
    def get(self):
        user= User.query.filter_by(id=session.get('user_id')).first()
        if user:
            response = make_response(
                user.to_dict(),
                200
            )
            return response
        else:
            abort(401, "Unauthorized")

api.add_resource(AuthorizedSession, '/authorized')



if __name__ == '__main__':
    app.run(port=5555, debug=True)