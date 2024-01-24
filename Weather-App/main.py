from flask import Flask, render_template
from flask import Blueprint, render_template

app = Flask(__name__)
main_bp = Blueprint('main', __name__, template_folder='templates', static_folder='static')

@main_bp.route('/')
def index():
    return render_template('index.html')
app.register_blueprint(main_bp)
if __name__ == '__main__':
    app.run(port=8080)
