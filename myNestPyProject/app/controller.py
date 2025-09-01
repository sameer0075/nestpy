# app/controller.py
from flask import Flask, jsonify
from .service import AppService

app = Flask(__name__)
service = AppService()

@app.route('/hello', methods=['GET'])
def get_hello():
    return jsonify(message=service.say_hello())

if __name__ == "__main__":
    app.run(debug=True)
