from flask import render_template
from wtforms import Form, BooleanField, StringField, PasswordField, validators
from flask import Flask, render_template, request

from . import app
from .config import institution_types, insurer_types

@app.route('/', methods=['GET'])
def home_page():
    return render_template('home_page.html', health_institutions=institution_types, insurance_providers=insurer_types)
