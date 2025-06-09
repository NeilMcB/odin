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
        if (event.target.classList.contains("digit")) {
            if (operator === undefined) leftOperand = updateOperand(leftOperand, event.target);
            else rightOperand = updateOperand(rightOperand, event.target);
        }

        if (leftOperand !== undefined && event.target.classList.contains("operator")) {
            operator = getOperator(event.target);
        }

        if (
            leftOperand !== undefined
            && operator !== undefined
            && rightOperand !== undefined
            && event.target.id === "equals"
        ) {
            // Apply the operation, store the result ready for future operations...
            leftOperand = operate(leftOperand, operator, rightOperand);
            // ...and clear the memory ready for future operations.
            rightOperand = undefined;
            operator = undefined;
        }

        if (event.target.classList.contains("clear")) {
            leftOperand = undefined;
            operator = undefined;
            rightOperand = undefined;
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
