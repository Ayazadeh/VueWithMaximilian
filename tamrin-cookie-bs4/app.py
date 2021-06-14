from flask import Flask, render_template, request, make_response

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def html():
    if request.method.upper() == 'GET':
        return render_template('coffe.html')
    else:
        htm = render_template('coffe.html')
        resp = make_response(htm)
        if 'tomato' in request.form:
            resp.set_cookie('name', 'Tomato Soup')
        elif 'chicken' in request.form:
            resp.set_cookie('name', 'Chicken Salad ')
        elif 'tea' in request.form:
            resp.set_cookie('name', 'Tea')
    return resp

app.run()
