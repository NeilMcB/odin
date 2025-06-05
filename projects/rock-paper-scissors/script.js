const Move = Object.freeze(
    {
        ROCK: "ROCK",
        PAPER: "PAPER",
        SCISSORS: "SCISSORS",
    }
);

const Result = Object.freeze(
    {
        USER_WINS: "USER_WINS",
        DRAW: "DRAW",
        COMPUTER_WINS: "COMPUTER_WINS",
    }
);


const roundCounterDisplay = document.querySelector(".round-counter .count");
const NUMBER_OF_ROUNDS = 5;
const INITIAL_ROUND_COUNT = 1;
let roundCount = INITIAL_ROUND_COUNT;

const userScoreDisplay = document.querySelector(".user-score .score");
const INITIAL_USER_SCORE = 0;
let userScore = INITIAL_USER_SCORE;

const computerScoreDisplay = document.querySelector(".computer-score .score");
const INITIAL_COMPUTER_SCORE = 0;
let computerScore = INITIAL_COMPUTER_SCORE;

const resetButton = document.querySelector("#reset");
resetButton.addEventListener(
    "click",
    () => {
        reset();
        refreshDisplay();
    }
);


function reset() {
    roundCount = INITIAL_ROUND_COUNT;
    userScore = INITIAL_USER_SCORE;
    computerScore = INITIAL_COMPUTER_SCORE;
}

function refreshDisplay() {
    roundCounterDisplay.textContent = roundCount;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}



const gameButtons = document.querySelector(".game-buttons");
gameButtons.addEventListener(
    "click",
    event => {
        const userChoice = event.target.id;
        const computerChoice = getComputerChoice();

        const roundResult = playRound(userChoice, computerChoice);
        switch (roundResult) {
            case Result.USER_WINS:
                userScore++;
                break;
            case Result.COMPUTER_WINS:
                computerScore++
                break;
        }

        if (roundCount < NUMBER_OF_ROUNDS) roundCount++;
        else endGame();

        refreshDisplay();
    }
)

function endGame(userScore, computerScore) {
    const finalResult = getFinalResult(userScore, computerScore);
    alert(finalResult);
    reset();
}


function getComputerChoice() {
    randomValue = Math.random();

    if (randomValue < 1/3) return Move.ROCK;
    if (randomValue < 2/3) return Move.PAPER;
    return Move.SCISSORS;
}

function getUserChoice() {
    return prompt(`Select one of: ${Object.values(Move).join(", ")}`)
}

function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toUpperCase();  // Allow users to input in any case
    const result = getRoundResult(userChoice, computerChoice)

    switch (result) {
        case Result.USER_WINS:
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
            break;
        case Result.DRAW:
            console.log(`Draw! You both played ${userChoice}`);
            break;
        case Result.COMPUTER_WINS:
            console.log(`You lose! ${computerChoice} beats ${userChoice}`);
            break;
    }

    return result
}

function getRoundResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) return Result.DRAW;

    switch (userChoice) {
        case Move.ROCK:
            if (computerChoice === Move.SCISSORS) return Result.USER_WINS;
            else return Result.COMPUTER_WINS;
        case Move.PAPER:
            if (computerChoice === Move.ROCK) return Result.USER_WINS;
            else return Result.COMPUTER_WINS;
        case Move.SCISSORS:
            if (computerChoice === Move.PAPER) return Result.USER_WINS;
            else return Result.COMPUTER_WINS;
    }
}

function getFinalResult(userScore, computerScore) {
    if (userScore > computerScore) return Result.USER_WINS;
    if (computerScore > userScore) return Result.COMPUTER_WINS;
    return Result.DRAW;
}

