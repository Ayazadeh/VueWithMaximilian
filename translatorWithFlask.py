from flask import Flask, request
import translators as ts

app = Flask(__name__)


@app.route('/<to_lang>/', defaults={"from_lang": "auto", "provider": "bing"})
@app.route('/<to_lang>/<from_lang>/', defaults={"provider": "bing"})
@app.route('/<to_lang>/<from_lang>/<provider>/')
def translate(from_lang, to_lang, provider):
    text = request.args["text"]
    tr = getattr(ts, provider)
    # result = ts.google(text, from_language=from_lang, to_language=to_lang)
    result = tr(text, from_language=from_lang, to_language=to_lang)
    return result


app.run()
