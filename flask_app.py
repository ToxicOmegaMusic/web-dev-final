from flask import Flask, request, render_template

app = Flask(__name__)

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
	return "Thank you for shopping with us today :D"

if __name__ == "__main__":
	app.run(host='0.0.0.0', port=8000)