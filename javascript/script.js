// .script

var withButtons = document.getElementsByClassName('button');
	console.log(withButtons);
	for (var i = 0; i < withButtons.length ; i++) {
		alert(withButtons);
		document.getElementsByClassName('button').innerHTML = withButtons;
	}