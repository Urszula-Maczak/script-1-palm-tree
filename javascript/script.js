// .script
var list = document.getElementByID('list'),
	 add = document.getElementByID('addElem');

add.addEventListener('click', function() {
		document.getElementByID('list').innerHTML += '<li>item</li>';
})

	