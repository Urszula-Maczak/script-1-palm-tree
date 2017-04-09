//scrip.js

//Papugi i słonie

var text = "Krowy koszą trawę, unosząćs się nad ziemią 15 centymetrów, na czerownych dywanach";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();

console.log (animalUpperCased);

var chooseFirstWord = text.split(' ', 1);
var textChangedForAnimal = text.replace(chooseFirstWord, animal);

console.log(textChangedForAnimal);

var partOfText = textChangedForAnimal.slice(0,46);

console.log(partOfText);