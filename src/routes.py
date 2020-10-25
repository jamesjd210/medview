from wtforms import Form, BooleanField, StringField, PasswordField, validators
from flask import Flask, render_template, request, json

from . import app
from .config import *
from .postgres import PostgresConnection


@app.route('/', methods=['GET'])
@app.route('/home_page', methods=['GET'])
def home_page():
    return render_template('home_page.html', health_institutions=institution_types, insurance_providers=insurer_types)


@app.route('/about_page', methods=['GET'])
def about_page():
    return render_template('about_us.html')


@app.route('/query', methods=['GET'])
def query():
    args = request.args
    print(args)
    insurer = request.args['insurer'].lower().replace("'", "&quot")
    institution_type = request.args['institution_type'].lower().replace("'", "&quot")

    if insurer == 'any' and institution_type == 'any':
        return 'Bad Query'
    
    query : str = ''

    if institution_type == 'any':
        query = f"""
            SELECT P.name, P.address
            FROM Providers AS P, (
                SELECT *
                FROM Providers_Insurers
                WHERE Providers_Insurers.insurer = '{insurer}'
            ) AS F
            WHERE P.pk_providers = F.pk_provider;
        """
    elif insurer == 'any':
        query = f"""
            SELECT P.name, P.address
            FROM Providers AS P
            WHERE P.type = '{institution_type}';
        """
    else:
        query = f"""
            SELECT P.name, P.address
            FROM Providers AS P, (
                SELECT pk_provider
                FROM Providers_Insurers
                WHERE Providers_Insurers.insurer = '{insurer}'
            ) AS F
            WHERE P.type = '{institution_type}' and P.pk_providers = F.pk_provider;
        """

    psql = PostgresConnection(PGHOST, PGDATABASE, PGUSER, PGPASSWORD)
    data = psql.execute(query)
    data['institution_type'] = institution_type

    response = app.response_class(
        response=json.dumps(data.to_json()),
        status=200,
        mimetype='application/json'
    )
    return response

