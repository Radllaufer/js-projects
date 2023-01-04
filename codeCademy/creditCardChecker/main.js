const _ = require('lodash');

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]              // false
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]  // false
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]           // false
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



// Luhn algorithm to check for validness
const validateCred = (array, request) => {
    let x = true;

    let checkArray = array.reduceRight((accumulator, currentValue) => {
        if (x === true) {
            x = false;
        } else {
            currentValue *= 2;
            if (currentValue > 9) currentValue -= 9;
            x = true;
        }
        return accumulator + currentValue;
   }, 0);
   
   if (request === undefined) {
       return ((checkArray %= 10) === 0 ? true : false);
   } else if (request === 'result') {
       return checkArray %= 10;
   }
}


// returns an array of invalid cards
const findInvalidCards = (() => {
    const invalidCards = [];
    
    batch.forEach(current => {
        if (!validateCred(current)) invalidCards.push(current);
    });
    return invalidCards;
})();


// returns an array of all companies with invalid cards
const idInvalidCompanies = (() => {
    const invalidCompanies = [];
    const companies = [
        { firstDigit: 3, company: 'Amex'       }, 
        { firstDigit: 4, company: 'Visa'       }, 
        { firstDigit: 5, company: 'MasterCard' }, 
        { firstDigit: 6, company: 'Discover'   }, 
    ];
    
    findInvalidCards.forEach(current => {
        for (let i = 0; i < companies.length; i++) {
            if ( current[0] === companies[i].firstDigit && !invalidCompanies.includes(companies[i].company) ) {
                invalidCompanies.push( companies[i].company );
            }            
        }
    });
    
    return invalidCompanies;
})();


// returns an array of valid cards
const makeCardsValid = (() => {
    let i = 5; // testcode
    const invalidCardsClone = _.cloneDeep(findInvalidCards);
    
    const newArray = invalidCardsClone.map(current => {
        const getResult = validateCred(current, 'result');
        
        if (getResult <= current[current.length - 1]) {
            current[current.length - 1] = current[current.length - 1] - getResult;

        } else if (getResult > current[current.length - 1]) {
            current[current.length - 1] = current[current.length - 1] + (10 - getResult);
        }
        
        return current;
    });
    return newArray;c
})();


// returns an array of all cards made valid
const allValidCards = (() => {
    const validCards = [];

    batch.forEach(current => {
        if (validateCred(current) === true) validCards.push(current);
    });

    const allValidCards = validCards.concat(makeCardsValid);
    return allValidCards;
})();

console.log(allValidCards);