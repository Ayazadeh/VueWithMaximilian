from user import User


def register_user(name, password, phone, email):
    count = 0
    count += 1
    return User(id=count, name=name, phone=phone, password=password, email=email)
