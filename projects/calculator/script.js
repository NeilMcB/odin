let leftOperand;
let rightOperand;
let operator;


const add = function (augend, addend) {
    return augend + addend;
};

const subtract = function (minuend, subtrahend) {
    return minuend - subtrahend;
};

const multiply = function (muliplier, multiplicand) {
    return muliplier * multiplicand;
};

const divide = function (dividend, divisor) {
    return dividend / divisor;
};


const operate = function (leftOperand, operation, rightOperand) {
    return operation(leftOperand, rightOperand);
};



const container = document.querySelector(".container");
const display = document.querySelector(".content");

container.addEventListener(
    "click",
    event => {
        if (event.target.classList.contains("digit")) {
            rightOperand = Number.parseInt(String(rightOperand ?? "") + event.target.id);
            display.textContent = rightOperand;
        }
    },
);

const getOperatorSymbol = function (operator) {
    switch (operator) {
        case add:
            return "+";
        case subtract:
            return "−";
        case multiply:
            return "×";
        case divide:
            return "÷";
    }
};
