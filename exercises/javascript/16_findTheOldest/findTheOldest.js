const findTheOldest = function(people) {
    return people
    .map(
        p => (
            {
                ...p,
                age: (p.yearOfDeath ?? new Date().getFullYear()) - p.yearOfBirth,
            }
        )
    )
    .reduce(
        (oldest, p) => oldest = p.age > oldest.age ? p : oldest,
        {age: -1},
    )
};

// Do not edit below this line
module.exports = findTheOldest;
