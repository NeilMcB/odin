const filterAlphaNumeric = function (string) {
    return string
        .split("")
        .filter(c => /^[a-zA-Z0-9]$/.test(c))
        .join()
}

const palindromes = function (string) {
    string = filterAlphaNumeric(string).toLowerCase();
    for (let index = 0; index < string.length / 2; index++) {
        const forwardsCursor = index;
        const backwardsCursor = string.length - index - 1;
        if (string.charAt(forwardsCursor) !== string.charAt(backwardsCursor)) return false;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
