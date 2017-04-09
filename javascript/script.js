// .script

var withButtons = document.getElementsByClassName('button');
	for (var i = 0; i < withButtons.length ; i++) {
		alert(withButtons[i].innerHTML);
	}

/* notatki
document.getElementsByClassName('button') - to tablica, pamiętać aby nie powtarzać ją w kodzie
											po ta metoda jest przypisana do zmiennej, aby było
											czytelniej i szybsza praca js,
i < withButtons.length - pętla się powtarza tyle razy jak długa jest tablica,
						w naszym przypadku są cztery buttony, więc 4 razy,
i - to jest indeks, który wyciąga elementy z tablicy. Można wskazać konkretny 
	element np. console.log(withButtons[2]), wtedy wyskakuje cztery razy 'Jem zupę',
console.log(withButtons[0].html) - w konsoli wyświetli mi się 'Jem placki'.

 */