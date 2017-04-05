// .script
var list = document.getElementByID('list'),
	add = document.getElementByID('addElem');

add.addEventListener('click', function() {
	document.getElementByID('list').innerHTML += '<li>item</li>';
})
var newItem = document.getElementsByTagName('li');
document.write(newItem.length);
	