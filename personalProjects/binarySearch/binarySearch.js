// guess number through binary search
const guessNumber = (n, lower, upper) => {
    let newUpper = upper;
    let newLower = lower;
    let guess = 0;

    if (Number.isInteger(n + lower + upper) === true) {
        while (guess !== n) {
            guess = Math.floor((newUpper + newLower) / 2);
            
            if (guess === n) {
                return guess;
            } else if (guess > n) {
                newUpper = Math.floor(guess - 1);
            } else {
                newLower = Math.floor(guess + 1);
            }
        }
    }
}

console.log(guessNumber(500, 0, 1000));