from flask import Flask


class User:

    def __init__(self, fname, lname, phone, gender, id):
        self.fname = fname
        self.lname = lname
        self.phone = phone
        self.gender = gender
        self.id = id
