const game = () => {
  let pScore = 0;
  let cScore = 0;
  //Start game function....things that'll happen when gane starts.
  const startGame = () => {
    let playBtn = document.querySelector(".intro button");
    let introScreen = document.querySelector(".intro");
    let match = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Functionality of the game
  const playMatch = () => {
    //PLayer Options
    const options = document.querySelectorAll(".options button");
    //Hands
    const pHand = document.querySelector(".player-hand");
    const cHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Options
        const cOptions = ["rock", "paper", "scissors"];
        const cNumber = Math.floor(Math.random() * 3);
        cChoice = cOptions[cNumber];
        setTimeout(() => {
          //Here we call compareHands function
          compareHands(this.textContent, cChoice);
          //Update images
          pHand.src = `./assets/${this.textContent}.png`;
          cHand.src = `./assets/${cChoice}.png`;
        }, 2000);
        //Animation
        pHand.style.animation = "shakePlayer 2s ease";
        cHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //Function to Update Score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //Text that will be show result
  const winner = document.querySelector(".winner");

  //Function to compare hands
  const compareHands = (pChoice, cChoice) => {
    //Checking for a tie
    if (pChoice === cChoice) {
      winner.textContent = "The match was a draw!";
      return;
    }
    //Check for rock
    if (pChoice === "rock") {
      if (cChoice === "scissors") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for paper
    if (pChoice === "paper") {
      if (cChoice === "rock") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (pChoice === "scissors") {
      if (cChoice === "paper") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //Calls all the function inside the main game function...
  startGame();
  playMatch();
};

//Start the game function
game();
