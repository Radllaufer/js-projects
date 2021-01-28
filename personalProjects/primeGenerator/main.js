const generatePrimes = (lower, upper) => {
    let x = 2;

    if (lower <= 0) { // make invalid numbers valid
        lower = 1;
    } else {
        while (lower < 3) { // iterate through prime number 1 to 3
            console.log(lower);
            lower++;
        }
    
        while (lower < upper) { // Check if a number is an integer
            while (!Number.isInteger(lower / x) && x < lower) {
                x++;
            }
            if (x === lower) {
                console.log(lower);
                lower++;
                x = 2;
            }
    
            lower++;
        }
    }

}

generatePrimes(1000, 2000);
