{
  const rockId = 1;
  const paperId = 2;
  const scissorsId = 3;

  const playGame = function(playerInput){
    clearMessages();

    const rock = "kamień";
    const paper = "papier";
    const scissors = "nożyce";

    function getMoveName(argMoveId){
      if(argMoveId == rockId){
        return rock;
      } else if(argMoveId == paperId){
        return paper;
      } else if(argMoveId == scissorsId){
        return scissors;
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if( argComputerMove == rock && argPlayerMove == paper){
        printMessage('Ty wygrywasz!');
      } else {
        printMessage('Tym razem przegrywasz :(');
      }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + argComputerMove);

    //ruch gracza
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName (playerInput) 

    printMessage('Twój ruch to: ' + argPlayerMove);

    //mechanizm gry

    function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    if( argComputerMove == rock && argPlayerMove == paper){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == rock && argPlayerMove == scissors){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == rock && argPlayerMove == rock){
      printMessage('Remis!');
    } else if (argComputerMove == paper && argPlayerMove == rock){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == paper && argPlayerMove == paper){
      printMessage('Remis!');
    } else if (argComputerMove == paper && argPlayerMove == scissors){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == scissors && argPlayerMove == scissors){
      printMessage('Remis!');
    } else if (argComputerMove == scissors && argPlayerMove == paper){
      printMessage('Przegrywasz!');
    } else if (argComputerMove == scissors && argPlayerMove == rock){
      printMessage('Ty wygrywasz!');
    } 
  }

  document.getElementById('play-paper').addEventListener('click', function () { playGame(paperId) });
  document.getElementById('play-rock').addEventListener('click', function () { playGame(rockId) });
  document.getElementById('play-scissors').addEventListener('click', function () { playGame(scissorsId) });
}