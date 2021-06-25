from flask import Flask, render_template
import requests

app = Flask(__name__)


@app.route('/')
def table():
    resp = requests.get('http://ma-web.ir/maktab52/users.json')
    return render_template('test1.html', users=resp.text)


if __name__ == '__main__':
    app.run()
