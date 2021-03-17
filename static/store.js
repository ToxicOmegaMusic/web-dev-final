builder = function() {
	listarea = document.querySelector('#product-list');
	listarea.innerHTML = '';
	str = '';
	for (i=0; i<stock.length; i++) {
		str += `
		<li>
			<div>
				<input type="checkbox" name="${i}" id="itemcheck${i}">
				<label for="itemcheck${i}">${stock[i].name}</label>
			</div>
			<p>$${stock[i].price}</p>
		</li>`;
	}
	listarea.innerHTML = str;
};

builder();