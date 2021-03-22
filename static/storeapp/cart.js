let addup = function() {
    let x = 0;
    for (item in result) {
        x += stock[item].price;
    }
    return (Math.round(x * 100) / 100).toFixed(2);
};

let rmv = function(x) {
    delete result[x];
    builder();
};

let builder = function() {
    let cartdom = document.querySelector('#cartdom');
    let ckbtn = document.querySelector('#ckbtn');
    let cklink = document.querySelector('#cklink');
    if (Object.keys(result)[0] != undefined) {
        let str = '';
        let total = addup();
        for (let item in result) {
            str += `
			<li>
				<p><span style="font-weight: bold;">${stock[item].name}</span> - <span style="color: #29785E;">$${stock[item].price}</span></p>
				<p class="rmvbtn" onclick="rmv(${item});">X</p>
			</li>`;
        }
        cartdom.innerHTML = str + `<p id="totlli">Total: <span style="font-weight: bold; color: #29785E;">$${total}</span></p>`;
    } else {
        cartdom.innerHTML = `<p id="totlli">Empty Cart!</p>`;
        cklink.href = storeurl;
        ckbtn.innerHTML = 'Return to Store Page';
        ckbtn.style.width = '10em';
        console.error('Error: Empty Cart!');
    }
};

builder();