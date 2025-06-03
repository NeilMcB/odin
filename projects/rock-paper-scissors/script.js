const Move = Object.freeze(
    {
        ROCK: "ROCK",
        PAPER: "PAPER",
        SCISSORS: "SCISSORS",
    }
);

function getComputerChoice() {
    randomValue = Math.random();

    if (randomValue < 1/3) return Move.ROCK;
    if (randomValue < 2/3) return Move.PAPER;
    return Move.SCISSORS;
}

function getUserChoice() {
    return prompt(`Select one of: ${Object.values(Move).join(", ")}`)
}
