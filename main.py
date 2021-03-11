from flask import Flask, session, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("store.html")

@app.route("/cart")
def cart():
	return render_template("cart.html")

if __name__ == "__main__":
	app.run()