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

let userScore = 0;
let computerScore = 0;

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
    const result = getResult(userChoice, computerChoice)

    switch (result) {
        case Result.USER_WINS:
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
            userScore++;
            break;
        case Result.DRAW:
            console.log(`Draw! You both played ${userChoice}`);
            break;
        case Result.COMPUTER_WINS:
            console.log(`You lose! ${computerChoice} beats ${userChoice}`);
            computerScore++;
            break;
    }
}

function getResult(userChoice, computerChoice) {
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
