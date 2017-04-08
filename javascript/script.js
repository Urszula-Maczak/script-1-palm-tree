//script.js

var a = -2;
var b = -8;
var value = (a * a) + (2 * a * b) - (b * b);
console.log('Wynik to ' + value);

if (value > 0) {
	console.log('Wartość jest dodatnia');
} else if (value < 0) {
	console.log('Wartość jest ujemna');
} else {
	console.log('Wartość zerowa');
}

if (value == 0) {
	console.log('Wartość zerowa');
} else /*if -niepotrzebny*/ (value != 0) {
	var value = (a * a) + (2 * a * b) - (b * b) > 0 ? 'Wartość (a * a) + (2 * a * b) - (b * b) jest dodatnia' : 'Wartość (a * a) + (2 * a * b) - (b * b) jest ujemna';
	console.log(value);
}

