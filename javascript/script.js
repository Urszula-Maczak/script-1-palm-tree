//ŁĄCZYMY TABLICE
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var	newName = "Marian";
if (allNames.indexOf(newName) === -1) {
	console.log('Wyrażenie jest spełnione');
}

allNames.push('Marian');
console.log(allNames);

var names = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola'];
var indexOfOla = names.indexOf('Ola');

console.log('szukana wartość znajduje się na ' + indexOfOla + ' pozycji tablicy');

console.log(names[indexOfOla]);