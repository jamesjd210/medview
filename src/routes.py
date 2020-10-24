from flask import render_template

from . import app

@app.route('/', methods=['GET'])
def hello():
    return 'home page'
