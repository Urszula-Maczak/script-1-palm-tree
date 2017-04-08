// .script
var list = document.getElementById('list');
var addButton = document.getElementById('addElem');

addButton.addEventListener('click', function() {
	var tablica = document.getElementsByTagName('li');
	list.innerHTML += '<li>item ' + tablica.length + '</li>';
})
/*var newItem = document.getElementsByTagName('li');
document.write(newItem.length);*/
	