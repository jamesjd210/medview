from flask import Flask
from flask import render_template

from src import run
import src.routes

if __name__ == '__main__':
    run()
