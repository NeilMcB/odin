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
