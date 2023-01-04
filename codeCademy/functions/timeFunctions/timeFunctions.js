/*
    Notes:
        Ideas:
        - Math.random probability 
        - ES6 syntax runTime check
*/



const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

const checkRunTime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};
// console.log(checkRunTime(is2p2));


const addTwo = num => num + 2;
const checkConsistentOutput = (func, val) => {
    let r1 = func(val);
    let r2 = func(val);
    if (r1 === r2) {
        return r1;
    } else {
        return 'This function returned inconsistent results';
    };
};
// console.log(checkConsistentOutput(addTwo, 8));



// returns the number of years since the start of computertime, which is: jan 1 1970 0:00
const yearsSinceStart = () => {
    const timeDivider = 1000 * 60 * 60 * 24 * 365.25; // 365.25 is the average of length of years
    const sinceStart = Math.floor(Date.now() / timeDivider);
    return sinceStart;
};
// console.log(yearsSinceStart());


// Doesn't work properly, not sure what is was supposed to do
const computerTime = () => {
    let currentTime = Date.now();
    currentTime = currentTime.toString();
    timeLength = Math.ceil(Math.log10(currentTime + 1));
    const formattedTime = [];
    
    for (let i = 0; i < timeLength; i++) {
        formattedTime.push(currentTime.charAt(i));
    };
    return formattedTime;
};
console.log(computerTime());
