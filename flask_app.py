from flask import Flask, request, url_for, render_template, redirect

app = Flask(__name__)

@app.route("/")
def home():
	return redirect(url_for("store"))

@app.route("/store/")
def store():
	return render_template("/storeapp/store.html")

@app.route("/store/cart/", methods=["GET", "POST"])
def cart():
	if request.method == "POST":
		result = request.form
		return render_template("/storeapp/cart.html", result = result)

@app.route("/thank-you/")
def thx():
	return render_template("/storeapp/thank-you.html")

if __name__ == "__main__":
	app.run()