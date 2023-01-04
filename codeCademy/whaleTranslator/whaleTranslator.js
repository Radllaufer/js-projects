const userInput = require('readline');;
const uI = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});

const vowels = ['A', 'E', 'I', 'O', 'U'];
let resultArray = [];

function translate(input) {
    input = input.toUpperCase();

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]) {
                resultArray.push(vowels[j]);
            }
        }
        if (input[i] === 'E') {
            resultArray.push('E');
        }
        if (input[i] === 'U') {
            resultArray.push('U');
        }
    }
}

console.log('|---------- Whale Translator 1.0 ----------|');
    console.log();
uI.question('What would you like to be translated? ', (answer) => {
    translate(answer);
    console.log(resultArray.join(''));
    uI.close();
});
