from flask import Flask
from flask import render_template

from src import run, app
import src.routes

if __name__ == '__main__':
    run()
