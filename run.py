from flask import Flask,render_template,url_for,flash,redirect,request,Blueprint
app = Flask(__name__,template_folder="public")


@app.route("/")
def hello():
    return render_template('index.html')


if __name__ == "__main__":
    app.run()