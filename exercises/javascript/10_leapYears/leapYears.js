const isDivisibleBy = function(number, divisor) {
    return number % divisor === 0;
}

const leapYears = function(year) {
    if (!isDivisibleBy(year, 4)) return false;
    if (isDivisibleBy(year, 100) && !isDivisibleBy(year, 400)) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
