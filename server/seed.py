from faker import Faker
from random import randint
from datetime import datetime

from app import app
from models import db, User, Diagnosis, Question, StudentResponse, Post, Powerpoint

userTemp = {
    'passwords': ['password123']
}

diagnosesTemp = {
    'name': ['MS', 'PD', 'CVA', 'TBI', 'SCI'],
    'background': ['show some back'],
    'presentation': ['give me presents'],
    'medication': ['get medication'],
    'imaging': ['get imaging'],
    'intevention': ['physical therapy'],
    'case': ['A 25-year old make']
}

postsTemp = {
    'descriptions': ['can we review this tomorrow', 'a little condused on this topic']
}

if __name__ == '__main__':
    f = Faker()
    with app.app_context():
        print('Deleting Data...')
        User.query.delete()
        Diagnosis.query.delete()
        Question.query.delete()
        StudentResponse.query.delete()
        Post.query.delete()
        Powerpoint.query.delete()

        print('Creating Users...')

        user = User(
            first_name = 'duane',
            last_name = 'grell',
            email = 'duanegrell@gmail.com',
            password = '123',
            class_of = 'professor',
            created_at = datetime(2011, 11, 2)
        )
        db.session.add(user)

        for i in range(30):
            user = User(
                first_name = f.first_name(),
                last_name = f.last_name(),
                email = f.email(),
                password = userTemp['passwords'][randint(0, len(userTemp['passwords'])-1)],
                class_of = randint(2023, 2027),
                created_at = f.date_between(start_date=datetime(2022, 1, 1)),
            )
            db.session.add(user)

        print ('Creating Diagnoses')
        for i in range(5):
            diagnoses = Diagnosis(
                name = diagnosesTemp['name'][randint(0, len(diagnosesTemp['name'])-1)],
                full_name = "FULL NAME HERE",
                background = diagnosesTemp['background'][randint(0, len(diagnosesTemp['background'])-1)],
                presentation = diagnosesTemp['presentation'][randint(0, len(diagnosesTemp['presentation'])-1)],
                medication = diagnosesTemp['medication'][randint(0, len(diagnosesTemp['medication'])-1)],
                imaging = diagnosesTemp['imaging'][randint(0, len(diagnosesTemp['imaging'])-1)],
                intevention = diagnosesTemp['intevention'][randint(0, len(diagnosesTemp['intevention'])-1)],

                case = diagnosesTemp['case'][randint(0, len(diagnosesTemp['case'])-1)],

                updated_at = f.date_between(start_date=datetime(2022, 1, 1)),
                created_at = f.date_between(start_date=datetime(2022, 1, 1)),
            )
            db.session.add(diagnoses)

        print ('Creating Questions')
        for i in range (50):
            questions = Question(
                topic = diagnosesTemp['name'][randint(0, len(diagnosesTemp['name'])-1)],

                body = f.text(),
                answer = f.text(),

                updated_at = f.date_between(start_date=datetime(2022, 1, 1)),
                created_at = f.date_between(start_date=datetime(2022, 1, 1))
            )
            db.session.add(questions)

        print ('Creating StudentsResponses')
        for i in range (50):
            studentResponses = StudentResponse (

                student_answer = f.text(),

                updated_at = f.date_between(start_date=datetime(2022, 1, 1)),
                created_at = f.date_between(start_date=datetime(2022, 1, 1))
            )
            db.session.add(studentResponses)

        print ('Creating Posts')
        for i in range (50):
            posts = Post (
                topic = diagnosesTemp['name'][randint(0, len(diagnosesTemp['name'])-1)],

                title = f.text(),
                body = f.text(),

                updated_at = f.date_between(start_date=datetime(2022, 1, 1)),
                created_at = f.date_between(start_date=datetime(2022, 1, 1))
            )
            db.session.add(posts)


        print ('Adding PPTs')
        powerpoint = Powerpoint(
            topic = 'MS',
            powerpoint = '<iframe src="https://dominican365-my.sharepoint.com/personal/duane_grell_duny_edu/_layouts/15/Doc.aspx?sourcedoc={8e3ee9fb-4367-4780-b0b6-6cd715f258b5}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>',
        )
        db.session.add(powerpoint)

        powerpoint = Powerpoint(
            topic = 'PD',
            powerpoint = '<iframe src="https://dominican365-my.sharepoint.com/personal/duane_grell_duny_edu/_layouts/15/Doc.aspx?sourcedoc={62b2bc02-ee54-4898-b1b4-0fca199f28f6}&amp;action=embedview&amp;wdAr=1.3333333333333333" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>',
        )
        db.session.add(powerpoint)

        powerpoint = Powerpoint(
            topic = 'CVA',
            powerpoint = '<iframe src="https://dominican365-my.sharepoint.com/personal/duane_grell_duny_edu/_layouts/15/Doc.aspx?sourcedoc={71c9911b-38bc-4327-bbfe-88f33f9f4d86}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>',
        )
        db.session.add(powerpoint)

        powerpoint = Powerpoint(
            topic = 'SCI',
            powerpoint = '<iframe src="https://dominican365-my.sharepoint.com/personal/duane_grell_duny_edu/_layouts/15/Doc.aspx?sourcedoc={48bc420c-9aa2-4bf2-a473-7b9f4608368c}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>',
        )
        db.session.add(powerpoint)


        powerpoint = Powerpoint(
            topic = 'TBI',
            powerpoint = '<iframe src="https://dominican365-my.sharepoint.com/personal/duane_grell_duny_edu/_layouts/15/Doc.aspx?sourcedoc={ea92448e-c701-4f7b-b1b0-2b21c9ef6825}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>',
        )
        db.session.add(powerpoint)

        db.session.commit()
        print('Finished!')