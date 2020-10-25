from flask import render_template
from wtforms import Form, BooleanField, StringField, PasswordField, validators
from flask import Flask, render_template, request

from . import app
from .config import institution_types, insurer_types

@app.route('/', methods=['GET'])
def home_page():
    return render_template('home_page.html', health_institutions=institution_types, insurance_providers=insurer_types)

@app.route('query?name_insurer=<name_insurer>&type_institution=<type_institution>', method=['GET'])
def get_user_params(name_insurer=None, type_institution=None):
    if name_insurer is None or type_institution is None:
        return
    return [];