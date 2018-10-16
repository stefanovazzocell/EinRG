const decToHex = {
	0: '0',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9',
	10: 'a',
	11: 'b',
	12: 'c',
	13: 'e',
	14: 'f'
}

function disco() {
	var v0 = Math.round(Math.random() * 14);
	var v1 = Math.round(Math.random() * 14);
	var v2 = Math.round(Math.random() * 14);
	var color = decToHex[v0] + decToHex[v1] + decToHex[v2];
	document.getElementsByClassName('App-header')[0].style.setProperty('background-color','#' + color);
}
