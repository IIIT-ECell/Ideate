from datetime import datetime
from fastapi import FastAPI

from database import Database
from models import User, ApplicantStatus, Applicant, IdeaStatus, Idea

app = FastAPI()
db = Database()


@app.get("/")
def read_root():
    return "ok"


u = User(
    name="Praneeth",
    email="praneethjain005@gmail.com",
    date_of_birth=datetime(2005, 1, 11),
    pfp=None,
    college="IIIT",
    branch="CSE",
)

i = Idea(
    title="Idea 1",
    description="Description 1",
    tags=["a", "b", "c"],
    author=u,
    status=IdeaStatus.OPEN,
    applicants=[Applicant(user=u, status=ApplicantStatus.WAITING)],
)


@app.get("/users")
def get_users():
    return db.users


@app.get("/user/{email}")
def get_user(email: str):
    return db.find_user(email)


@app.post("/user")
def post_user(user: User):
    return db.add_user(user)


@app.get("/ideas")
def get_ideas():
    return db.ideas


@app.get("/idea/{title}")
def get_idea(title: str):
    return db.find_idea(title)


@app.post("/idea")
def post_idea(idea: Idea):
    db.add_idea(idea)
    return "added idea"
