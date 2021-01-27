let x = 1;
let y = 2;
let z;

while (x < 3) {
    console.log(x);
    x++;
}

function isPrime() {
    while (x < 10) {
        z = x / y;
        
        while (!Number.isInteger(z) && y < x) {
            y++;
            console.log('y = ' + y);
        }
        if (y === x) {
            console.log(x);
            console.log('z = ' + z);
            x++;
            y = 2;
        }

        x++;
    }
}

isPrime();
