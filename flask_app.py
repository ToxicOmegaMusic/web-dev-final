from flask import Flask, request, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/store/")
def store():
	return render_template("/storeapp/store.html")

@app.route("/store/cart/", methods=["GET", "POST"])
def cart():
	if request.method == "POST":
		result = request.form
		return render_template("/storeapp/cart.html", result = result)

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=8000)