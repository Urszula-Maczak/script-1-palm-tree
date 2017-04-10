//Zadanie: Tworzymy funkcje
function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a * h /2;
		//console.log('Wartość większa od zera');
	} else /*if (a <= 0 || h <= 0) - niepotrzebne */ {
		return 'Naprawidłowe dane';
	}
	//return a * h /2; przeniesione na wyżej
}
	console.log(getTriangleArea(4,6));

var traingle1Area = getTriangleArea(10,15);
var traingle2Area = getTriangleArea(-3,8);
var traingle3Area = getTriangleArea(0,0);

	console.log(traingle1Area);
	console.log(traingle2Area);
	console.log(traingle3Area);