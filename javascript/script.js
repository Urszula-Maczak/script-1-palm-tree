// .script

var withButtons = document.getElementsByClassName('button');
var table = withButtons[0];
	console.log(table);
	for (var i = 0; i < table.length ; i++) {
		alert(table);
		withButtons.innerHTML = table.length;
	}