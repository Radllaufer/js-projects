const listPrimes = (lower, upper) => {
    let x = 2;

    if (lower <= 0) {
        lower = 1;
    } else {
        while (lower < 3) {
            console.log(lower);
            lower++;
        }
    
        while (lower < upper) {
            while (!Number.isInteger(lower / x) && x < lower) {
                console.log(`${lower / x}`);
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

listPrimes(1, 10);