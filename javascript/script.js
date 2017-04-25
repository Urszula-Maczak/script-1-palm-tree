// scrip.pl
var newGameBtn = document.getElementById('js-newGameButton'); //Nowa Gra - szczegółowo

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });     
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'), //Nowa Gra
    pickElem = document.getElementById('js-playerPickElement'), //Kamień, Papier, Nożyce
    resultsElem = document.getElementById('js-resultsTableElement'); //Imię gracza, komputer, Wybór gracza, Wybór komputera, Wynika gracza, Wynik komputera

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';

    setGameElements();
  }

}

var playerPointsElem = document.getElementById('js-playerPoints'), //zerowy wynik gracza
    playerNameElem = document.getElementById('js-playerName'),      //Imię gracza
    computerPointsElem = document.getElementById('js-computerPoints'); //Zerowy wynik komputera

function newGame() {
  player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); 
  }
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),  //Wybór gracza
    computerPickElem = document.getElementById('js-computerPick'), //Wybór komputera
    playerResultElem = document.getElementById('js-playerResult'),  //Wynik gracza
    computerResultElem = document.getElementById('js-computerResult'); //Wynik komputera


function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = ''; //zastępuje pusty string
    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        
        winnerIs = 'computer';
    }

   if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }
    setGamePoints();
}

function playerPick(playerPick) {
	var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    //console.log(setGamePoints);
	playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function endGame() {
    console.log(endGame);
    if (player.score == 10 || computer.score == 10) { 
        gameState.innerHTML = setGameElements() = 'ended';
    }

    if (player.score > computer.score) {
        playerNameElem.innerHTML = "Wygrywa: " + player.name;
    }
    endGame();
}



