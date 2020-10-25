from flask import render_template
from wtforms import Form, BooleanField, StringField, PasswordField, validators
from flask import Flask, render_template, request

from . import app

@app.route('/', methods=['GET'])
def home_page():
    health_insurance = ['All', 'Hospital', 'Dentistry', 'Primary Care Clinic', 'Urgent Care Clinic', 'Convenience Clinic', 'Imaging Center',
    'Laboratory', 'Supplier', 'Specialty Center', 'Other']
    return render_template('home_page.html', health_insurance=health_insurance)
