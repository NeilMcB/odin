const repeatString = function(string, numberOfRepeats) {
    if (numberOfRepeats < 0) return "ERROR";

    let repeatedString = ""
    for (let index = 0; index < numberOfRepeats; index++) {
        repeatedString += string
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
