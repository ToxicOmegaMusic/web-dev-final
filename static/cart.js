

builder = function() {
	cart = JSON.parse(localStorage.getItem('cart'));
	// cart = [{name: 'Super Cool Scooter',price: 110},{name: 'Electric Toothbrush 3000',price: 25},{name: 'Analogue Refrigerator',price: 275},{name: 'Life Advice',price: 50},{name: 'GameStation 2',price: 175},{name: 'Ancient Ritual Starter Kit',price: 60}];
	cartdom = document.querySelector('#cart');
	str = "";
	for (i=0; i<cart.length; i++) {
		str += `
		<li>
			<p>$${cart[i].price} ---- ${cart[i].name}</p>
		</li>
		`
	}
	cartdom.innerHTML = str;
};

builder();