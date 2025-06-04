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

const NUMBER_OF_ROUNDS = 5;


console.log("Invoke `playGame()` to play.");

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    for (let round = 0; round < NUMBER_OF_ROUNDS; round++) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();

        const roundResult = playRound(userChoice, computerChoice)

        switch (roundResult) {
            case Result.USER_WINS:
                userScore++;
                break;
            case Result.COMPUTER_WINS:
                computerScore++;
                break;
        }
    }

    const finalResult = getFinalResult(userScore, computerScore);
    console.log(`Final score: User ${userScore} - ${computerScore} Computer. ${finalResult.replace("_", " ")}!`);
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
