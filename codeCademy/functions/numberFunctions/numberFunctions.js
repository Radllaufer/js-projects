// sortYears
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

const sortYears = array => {
    array.sort((x, y) => y - x);
    return array;
}
console.log(sortYears(years));



// sortByTeeth
const speciesArray = [
    { speciesName: 'shark', numTeeth: 50 },
    { speciesName: 'dog', numTeeth: 42 },
    { speciesName: 'alligator', numTeeth: 80 },
    { speciesName: 'human', numTeeth: 32 }
];

const sortSpeciesByTeeth = array => {
    array.sort((x, y) => x.numTeeth > y.numTeeth);
    return array;
}
console.log(sortSpeciesByTeeth(speciesArray));



// factorial
const factorial = n => {
    const startValue = n;
    if (n >= 0) {
        for (let i = 1; i < startValue; i++) {
            n *= i;
        }
    } else {
        console.log('Please enter a positive number');
    }
    return n;
}
console.log(factorial(720));



// distance between characters
const subLength = (string, char) => {
    const array = [];
    const indexes = [];

    for (let i = 0; i < string.length; i++) {
        array.push(string[i]);
    }

    for (let i = 0; i < string.length; i++) {
        if (array[i] === char) {
            indexes.push(i);
        }
    }

    if (indexes.length === 2) {
        return indexes[1] - indexes[0] + 1;
    } else {
        return 0;
    }
}
console.log(subLength('cheesecake', 'k'));