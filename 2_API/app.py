from flask import Flask, jsonify
import controllers.get_posts_controller as c
# from dotenv import load_dotenv

# load_dotenv()
app = Flask(__name__)


@app.route("/")
def index():
    return "Welcome to python API"


@app.route("/get-notes", methods=['GET'])
def get_notes():
    return c.get_notes()


@app.route("/note", methods=['POST'])
def create_note():
    return c.create_note()


@app.route("/note/<id>", methods=['PUT'])
def update_note(id):
    return c.update_note(id)


@app.route("/note/<id>", methods=['DELETE'])
def delete_note(id):
    return c.delete_note(id)


# just return request.params
# @app.route('/echo/<path>', methods=['GET', 'POST'])
# def echo(path):
#     return jsonify(request.params)

if __name__ == "__main__":
    app.run()


# from flask import Flask, request, jsonify
# app = Flask(__name__)

# @app.route('/api/add_message/<uuid>', methods=['GET', 'POST'])
# def add_message(uuid):
#     content = request.json
#     print(content['mytext'])
#     return jsonify({"uuid":uuid})

# if __name__ == '__main__':
#     app.run(host= '0.0.0.0',debug=True)
