//choinka
//	var level = 5; 
function drawTree(level) {
	for (var i = 1; i <= level; i++) {
		
		var star = '';
		for (var j = 0; j < i*2-1; j++) {
			star += '*'; // star = star + '*' albo star++
		}
		//console.log(star); - nierówna choinka
		console.log(' '.repeat(level - i) + '*'.repeat(i*2-1));	//wyśrodkowana choinka	
	}
}
drawTree(5);

/*Notatki:
level - ilość poziomów (parametr funkcji albo zmienna)
i - liczba aktualnego poziomu
j - liczy ilość iteracji (powtarzanie się pętli)
i*2-1 - ciąg, który liczy ilość gwiazdek dla danego poziomu */

