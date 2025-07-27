from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, world! Product CMS is alive. 🚀"

if __name__ == "__main__":
    app.run(debug=True)   # visit http://localhost:5000
