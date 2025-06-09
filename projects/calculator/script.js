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

const refreshDisplay = function () {
    display.textContent = `${leftOperand ?? ""} ${getOperatorSymbol(operator) ?? ""} ${rightOperand ?? ""}`;
}

document.addEventListener("DOMContentLoaded", refreshDisplay);

container.addEventListener(
    "click",
    event => {
        if (operator === undefined && event.target.classList.contains("digit")) {
            leftOperand = updateOperand(leftOperand, event.target);
        }

        if (leftOperand !== undefined && event.target.classList.contains("operator")) {
            operator = getOperator(event.target);
        }

        if (leftOperand !== undefined && operator !== undefined && event.target.classList.contains("digit")) {
            rightOperand = updateOperand(rightOperand, event.target);
        }

        refreshDisplay();
    },
);

const updateOperand = function (operand, digitButton) {
    return Number.parseInt(String(operand ?? "") + digitButton.id);
}

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

const getOperator = function (button) {
    switch (button.id) {
        case "add":
            return add;
        case "subtract":
            return subtract;
        case "multiply":
            return multiply;
        case "divide":
            return divide;
    }
}
