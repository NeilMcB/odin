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
        if (event.target.classList.contains("digit")) handleDigit(event.target);
        else if (event.target.classList.contains("operator")) handleOperator(event.target);
        else if (event.target.id  === "equals") handleEquals();
        else if (event.target.classList.contains("clear")) handleClear();

        refreshDisplay();
    },
);

const handleDigit = function (digitButton) {
    // If no operator has been selected then we are constructing the left operand
    if (operator === undefined) {
        leftOperand = updateOperand(leftOperand, digitButton);
    }
    else {
        rightOperand = updateOperand(rightOperand, digitButton);
    }
}

const handleOperator = function (operatorButton) {
    if (leftOperand === undefined) {
        // If no left operand has been defined then we do nothing
        return;
    }

    if (rightOperand !== undefined) {
        // If we have already built the right operand then execute the existing calculation first
        handleEquals();
    }

    operator = getOperator(operatorButton);
}

const handleEquals = function () {
    if (leftOperand === undefined || operator === undefined || rightOperand === undefined) {
        // If we don't have all the required components of an operation then do nothing
        return;
    }

    // Apply the operation, store the result ready for future operations...
    leftOperand = operate(leftOperand, operator, rightOperand);
    // ...and clear the memory ready for future operations.
    rightOperand = undefined;
    operator = undefined;
}

const handleClear = function () {
    // Clear all global memory
    leftOperand = undefined;
    operator = undefined;
    rightOperand = undefined;
}

const updateOperand = function (operand, digitButton) {
    return Number.parseFloat(String(operand ?? "") + digitButton.id);
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
