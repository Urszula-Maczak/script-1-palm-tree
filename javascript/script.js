//scrip.js
//triangle area
// nic nie wychodzi, oparłam się na materiale z sieci, 

var a = 2,
	h = 3,
	triangleArea;
	triangleArea = a * h / 2;
	alert (triangleArea);

var a,h,triangleArea;

a = prompt ('podaj liczbę a');
h = prompt ('podaj liczbę h');

a = parseInt ( a ); //zamiana tekstu na liczbę
h = parseInt ( h ); //zamiana tekstu na liczbę

triangleArea = a * h / 2;
alert(triangleArea);

function triangleArea (a*h/2){
 return a * h / 2;
}

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);