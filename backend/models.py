from datetime import datetime
from pydantic import BaseModel
from enum import Enum


class User(BaseModel):
    name: str
    email: str
    date_of_birth: datetime
    pfp: str | None
    college: str | None
    branch: str


class ApplicantStatus(str, Enum):
    WAITING = "Waiting"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


class Applicant(BaseModel):
    user: User
    status: ApplicantStatus


class IdeaStatus(str, Enum):
    OPEN = "Open"
    ONGOING = "Ongoing"
    CLOSED = "Closed"


class Idea(BaseModel):
    title: str
    description: str
    tags: list[str]
    author: User | None
    status: IdeaStatus
    applicants: list[Applicant]
