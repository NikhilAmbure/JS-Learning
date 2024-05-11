
// gets the value out the storage
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; // || Default operator

// DOM 
updateScoreElement();


// And
/*  
// to remove the null problem of 'score'
// default score
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
} */

function playGame(playerMove) {

    computerMove = pickComputerMove();
    let result = '';

    // to get a result
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        }
        else if (computerMove === 'paper') {
            result = 'You Win.';
        }
        else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win.';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    }

    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You lose.';
        }
        else if (computerMove === 'scissors') {
            result = 'You Win.';
        }
    }

    //  Update score
    if (result === 'You Win.') {
        score.wins += 1;
    }
    else if (result === 'You lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }

    // Convert object into string form
    localStorage.setItem('score', JSON.stringify(score));

    // Modifies
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML =
        `You
      <img src="Images/${playerMove}-emoji.png" class="rock-icon">
      <img src="Images/${computerMove}-emoji.png" class="rock-icon">
      Computer`;

    /*
    // displaying score in popup
    alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    */

}

// Added / Modifies
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove() {

    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}


let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// };

function autoPlay() {

    if (!isAutoPlaying) {

        // setInterval returns a Id
        // Using arrowFunction
        intervalId = setInterval(() => {
            // To pick random move
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);

        isAutoPlaying = true;
    } else {
        // intervalId to stop the interval
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

// EventListeners
document.querySelector('.js-rock-button')
.addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
    playGame('scissors');
});

// Play using Keyboard
// event contains key
// we know which key is pressed
// document.body.addEventListener('keydown', (event) => {
//     console.log(event.key);
// });

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    }  else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
});

