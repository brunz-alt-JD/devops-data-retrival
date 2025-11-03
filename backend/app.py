from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # Allow frontend-

@app.route("/data")
def get_data():
    return jsonify({
        "records": [
            {"id": 1, "name": "Alice", "score": 93},
            {"id": 2, "name": "Bruno", "score": 88},
            {"id": 3, "name": "Chris", "score": 76}
        ]
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
