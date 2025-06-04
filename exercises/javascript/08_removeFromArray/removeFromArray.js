const removeFromArray = function(array, ...toBeRemoved) {
    return array.filter(v => !toBeRemoved.includes(v));
};

// Do not edit below this line
module.exports = removeFromArray;
