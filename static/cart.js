if (Object.keys(result)[0] != undefined) {
	for (item in result) {
		console.log(stock[item].name);
	}
} else {
	console.log("Empty Cart!");
}
