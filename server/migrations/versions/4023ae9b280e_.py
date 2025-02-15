"""empty message

Revision ID: 4023ae9b280e
Revises: 
Create Date: 2023-04-18 12:41:33.765332

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4023ae9b280e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('diagnoses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('full_name', sa.String(), nullable=True),
    sa.Column('background', sa.String(), nullable=True),
    sa.Column('presentation', sa.String(), nullable=True),
    sa.Column('medication', sa.String(), nullable=True),
    sa.Column('imaging', sa.String(), nullable=True),
    sa.Column('intevention', sa.String(), nullable=True),
    sa.Column('case', sa.String(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('powerpoints',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('topic', sa.String(), nullable=True),
    sa.Column('powerpoint', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('questions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('topic', sa.String(), nullable=True),
    sa.Column('body', sa.String(), nullable=True),
    sa.Column('answer', sa.String(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('bio', sa.String(), nullable=True),
    sa.Column('class_of', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('topic', sa.String(), nullable=True),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('body', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_posts_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('student_responses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.String(), nullable=True),
    sa.Column('question_id', sa.String(), nullable=True),
    sa.Column('student_answer', sa.String(), nullable=True),
    sa.Column('actual_answer', sa.String(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['actual_answer'], ['questions.answer'], name=op.f('fk_student_responses_actual_answer_questions')),
    sa.ForeignKeyConstraint(['question_id'], ['questions.id'], name=op.f('fk_student_responses_question_id_questions')),
    sa.ForeignKeyConstraint(['student_id'], ['users.id'], name=op.f('fk_student_responses_student_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('student_responses')
    op.drop_table('posts')
    op.drop_table('users')
    op.drop_table('questions')
    op.drop_table('powerpoints')
    op.drop_table('diagnoses')
    # ### end Alembic commands ###
