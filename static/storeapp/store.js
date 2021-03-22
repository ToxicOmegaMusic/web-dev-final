let labelbuttons = [];
let checkspace = [];

let updatebtn = function() {
	for (let check in checkspace) {
		if (checkspace[check].checked == true) {
			labelbuttons[check].className = 'btn-red';
			labelbuttons[check].innerHTML = 'Remove'
		} else {
			labelbuttons[check].className = 'btn-grn';
			labelbuttons[check].innerHTML = 'Add to Cart';
		} 
	}
};

let builder = function() {
	let listarea = document.querySelector('#product-list');
	listarea.innerHTML = '';
	let str = '';
	for (i=0; i<stock.length; i++) {
		str += `
		<li>
			<div class="prod-title">${stock[i].name}</div>
			<div class="shpbtnspace">
				<input type="checkbox" name="${i}" id="itemcheck${i}" style="display: none;">
				<label class="btn-grn" for="itemcheck${i}">Add to Cart</label>
			</div>
			<p>$${stock[i].price}</p>
		</li>`;
	}
	listarea.innerHTML = str;

	labelbuttons = document.querySelectorAll('.shpbtnspace label');
	checkspace = document.querySelectorAll('.shpbtnspace input');
	for (let btn of checkspace) {
		btn.addEventListener('change', updatebtn);
	}
};

builder();