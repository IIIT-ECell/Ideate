from models import User, ApplicantStatus, Applicant, IdeaStatus, Idea
import pickle
from rich import print


class Database:

    ideas_path = "data/ideas.pickle"
    users_path = "data/users.pickle"

    def __init__(self) -> None:
        try:
            self.ideas = self.load_ideas()
        except FileNotFoundError:
            self.ideas = []

        try:
            self.users = self.load_users()
        except FileNotFoundError:
            self.users = []

    def find_idea_by_title(self, title: str) -> Idea | None:
        for idea in self.ideas:
            if idea.title == title:
                return idea

    def find_ideas_by_email(self, email: str) -> list[Idea]:
        return list(filter(lambda idea: idea.author.email == email, self.ideas))

    def find_ideas_by_status(self, status: str) -> list[Idea]:
        return list(filter(lambda idea: idea.status.value == status, self.ideas))

    def find_user(self, email: str) -> User | None:
        for user in self.users:
            if user.email == email:
                return user

    def add_user(self, user: User) -> None:
        self.users.append(user)
        self.save_users()

    def add_idea(self, idea: Idea) -> None:
        self.ideas.append(idea)
        self.save_ideas()

    def load_ideas(self) -> list[Idea]:
        with open(self.ideas_path, "rb") as f:
            return pickle.load(f)

    def load_users(self) -> list[User]:
        with open(self.users_path, "rb") as f:
            return pickle.load(f)

    def save_ideas(self) -> None:
        with open(self.ideas_path, "wb") as f:
            pickle.dump(self.ideas, f)

    def save_users(self) -> None:
        with open(self.users_path, "wb") as f:
            pickle.dump(self.users, f)


if __name__ == "__main__":
    db = Database()
