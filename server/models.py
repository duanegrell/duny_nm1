import datetime
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

metadata = MetaData(naming_convention={
    'fk': 'fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s',
})

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

db = SQLAlchemy(metadata=metadata)

CORS(app)
api = Api(app)
db.init_app(app)
migrate = Migrate(app, db)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, default='')
    last_name = db.Column(db.String, default='')

    email = db.Column(db.String)
    password = db.Column(db.String)

    image = db.Column(db.String, default = 'https://us.123rf.com/450wm/marlene9/marlene92108/marlene9210800098/173713344-cute-little-african-american-boy-sitting-at-desk.jpg?ver=6')
    bio = db.Column(db.String, default = 'I am a student')

    class_of = db.Column(db.String, default='')
    
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    @validates('name')
    def validate_name(self, key, value):
        if len(value) < 1 or len(value) > 20:
            raise ValueError('Please enter a Username between 1-20 characters')
        return value

    @validates('email')
    def validate_email(self, key, value):
        if len(value) < 7 and not '@' in value:
            raise ValueError('Please enter a valid Email')
        return value

    @validates('password')
    def validate_password(self, key, value):
        if len(value) < 1:
            raise ValueError('Please enter a Password')
        return value

    def __repr__(self):
        return f'<user name:{self.name}, email:{self.email}>'


class Diagnosis(db.Model, SerializerMixin):
    __tablename__ = 'diagnoses'

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String, default='')
    full_name = db.Column(db.String, default='')
    background = db.Column(db.String, default='')
    presentation = db.Column(db.String, default='')
    medication = db.Column(db.String)
    imaging = db.Column(db.String)
    intevention = db.Column(db.String)

    case = db.Column(db.String)

    updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


class Question(db.Model, SerializerMixin):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key=True)

    topic = db.Column(db.String, default='')
    body = db.Column(db.String, default='')
    answer = db.Column(db.String)

    updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


class StudentResponse(db.Model, SerializerMixin):
    __tablename__ = 'student_responses'

    id = db.Column(db.Integer, primary_key=True)

    student_id = db.Column(db.String, db.ForeignKey('users.id'))
    question_id = db.Column(db.String, db.ForeignKey('questions.id'))
    student_answer = db.Column(db.String, default='')
    actual_answer = db.Column(db.String, db.ForeignKey('questions.answer'))

    updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


class Post (db.Model, SerializerMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)

    topic = db.Column(db.String, default='')
    title = db.Column(db.String, default='')
    body = db.Column(db.String, default='')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    updated_at = db.Column(db.DateTime, onupdate=datetime.datetime.utcnow)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


class Powerpoint (db.Model, SerializerMixin):
    __tablename__ = 'powerpoints'

    id = db.Column(db.Integer, primary_key=True)

    topic = db.Column(db.String, default='')
    powerpoint = db.Column(db.String, default='')