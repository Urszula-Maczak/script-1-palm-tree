//scrip.js

//Zadanie: Pole trójkąta
var a = 5; // ewentualnie prompt
var h = 8; // ewentualnie prompt
var area = a * h / 2;
console.log('Pole trójkąta to ' + area);

//Zadanie: Instrukcje warunkowe w praktyce
var a = 2;
var b = 2;
var value = (a * a) + (2 * a * b) - (b * b);
console.log('Wynik to ' + value);
	
if (value > '0') {
	console.log('Wartość jest dodatnia');
 } else if (value < '0') {
	console.log('Wartość jest ujemna');
 } else {
 	console.log('Wartość zerowa');
 }
  
 if (value == '0') {
 	console.log('Wartość zerowa');
 } else if (value != '0') {
 	var value = (a * a) + (2 * a * b) - (b * b) > 0 ? 'Wartość (a * a) + (2 * a * b) - (b * b) jest dodatnia' : 'Wartość (a * a) + (2 * a * b) - (b * b) jest ujemna';
 	console.log(value); 
 }

//Zadanie: Tworzymy funkcje
	var a = 4;
	var h = 6;

		function getTriangleArea(a, h) {
			if ((a > '0') && (h > '0')) {
				console.log('Wartość większa od zera');
			} else if ((a <= '0') || (h <= '0')) {
				console.log('Naprawidłowe dane');
			}

			return a * h /2;
	}
		console.log(getTriangleArea(4,6));

	var traingle1Area = getTriangleArea(10,15);
	var traingle2Area = getTriangleArea(-3,8);
	var traingle2Area = getTriangleArea(0,0);


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

//Papugi i słonie

var text = "Papugi koszą trawę, unosząćs się nad ziemią 15 centymetrów, na czerownych dywanach";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();

console.log (animalUpperCased);

var textChangedForAnimal = text.replace('Papugi', animal);

console.log(textChangedForAnimal);

var partOfText = textChangedForAnimal.slice(0,46);

console.log(partOfText);