from flask import Flask, redirect, render_template, url_for

app = Flask(__name__, template_folder='templates')


@app.route('/')
def index():
    return redirect(url_for('register_get'))


@app.route('/register/', methods=['GET'])
def register_get():
    res = render_template('register.html')
    return res


# app.add_url_rule('/register', 'register', register_get)
# @app.route('/register', methods=['POST'])
# def user_add():
#     data = request.form
#     print(data)


app.run()
