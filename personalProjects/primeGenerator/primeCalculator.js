let primesArray = [];

const checkPrime = (x) => {
    if (x < 2 || !Number.isInteger(x)) {
        return;
    }

    for (let y = 2; y < x; y++) {
        if (Number.isInteger( x / y )) {
            return false;
        }
    }

    return true;
}

const findPrimes = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (checkPrime(i)) {
            primesArray.push(i);
        }
    }
}
