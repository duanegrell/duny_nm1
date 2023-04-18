"""empty message

Revision ID: 92ed1673a9b7
Revises: c2760b56f8f0
Create Date: 2023-04-14 16:56:47.394614

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '92ed1673a9b7'
down_revision = 'c2760b56f8f0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('diagnoses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('full_name', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('diagnoses', schema=None) as batch_op:
        batch_op.drop_column('full_name')

    # ### end Alembic commands ###
