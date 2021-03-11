stock = [
	{
		name: 'Super Cool Scooter',
		price: 110
	},
	{
		name: 'Electric Toothbrush 3000',
		price: 25
	},
	{
		name: 'Analogue Refrigerator',
		price: 275
	},
	{
		name: 'Life Advice',
		price: 50
	},
	{
		name: 'GameStation 2',
		price: 175
	},
	{
		name: 'Ancient Ritual Starter Kit',
		price: 60
	}
];

cart = [];

builder = function() {
	listarea = document.querySelector('#product-list');
	listarea.innerHTML = '';
	str = '';
	for (i=0; i<stock.length; i++) {
		str += `
		<li>
			<div>
				<h3>${stock[i].name}</h3>
				<p class="price">$${stock[i].price}</p>
			</div>
			<div class="nbtn" onclick="cartadd(${i})"><p>Add to Cart</p></div>
		</li>`;
	}
	listarea.innerHTML = str;
};

cartadd = function(x) {
	checkbtn = document.querySelector("#chkbtn");
	cart.push(stock[x]);
	checkbtn.innerHTML = `<p>Proceed to Checkout (${cart.length})</p>`;
	localStorage.setItem("cart", JSON.stringify(cart))
};

checkout = function() {
	
};

builder();