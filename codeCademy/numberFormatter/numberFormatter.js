const formatNumber = (n) => {
    const l = n.toString().length;
    const a = [];
    let c = 1;
    let i;

    for (let i = 0; i < l; i++) {
        a.push( n.toString().charAt(i) ); // replace with String.split()
    }

    const periodIndex = a.findIndex(e => e === '.');
    periodIndex > -1 ? i = periodIndex - 1 : i = a.length - 1;

    while (i >= 0) {
        if ((3 / c) === 1 && i !== 0) {
            a.splice(i, 0, ',');
            c = 0;
        }
        i--;
        c++;
    }

    return a.join('');
}

console.log(formatNumber(1234567.89));
