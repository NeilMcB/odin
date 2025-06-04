const sumAll = function(start, stop) {
    if (!Number.isInteger(start) || !Number.isInteger(stop)) return "ERROR";
    if ((start < 0) || (stop < 0)) return "ERROR";

    [start, stop] = [start, stop].sort();  // Start should be the lesser of the two numbers

    return Array(stop)
        .fill(1)
        .map((x, y) => x + y)
        .filter(x => x >= start)
        .reduce((collector, value) => collector + value, 0)
};

// Do not edit below this line
module.exports = sumAll;
