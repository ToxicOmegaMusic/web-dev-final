if (Object.keys(result)[0] != undefined) {
	str = '';
	for (item in result) {
		str += `
		<li>
			<p>Name: ${stock[item].name}</p>
			<p>Price: $${stock[item].price}</p>
		</li>`;
	}
	logarea = document.querySelector('#logarea');
	logarea.innerHTML = str;
	console.log(str);
} else {
	console.log('Empty Cart!');
}
