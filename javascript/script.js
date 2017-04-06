//ŁĄCZYMY TABLICE
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var	newName = "Marian"
if (allNames.indexOf(newName) === -1.) {
	console.log('Wyrażenie jest spełnione');
} else {
	console.log(allNames[newName])
}

var x = allNames.push('Marian');
console.log(allNames);
