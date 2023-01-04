let output = [];
let input = '';
let secondOperator = true;

function getInput(input) {
    // const number = (1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0);
    // const operator = ('.' || '/' || '*' || '+' || '-');

    if (input == 1 || input == 2 || input == 3 || input == 4 || input == 5 || input == 6 || input == 7 || input == 8 || input == 9 || input == 0) {
        output.push(input);
        console.log(output);
    } else if (secondOperator && (input == '.' || input == '/' || input == '*' || input == '+' || input == '-')) {
        output.push(input);
        secondOperator = false;
    } else if (input == '=') {
        
    } else if (input == 'c') {
        
    } else {
        
    };

    output.join('');
    console.log(input);
    document.getElementById('screen').innerHTML = output;
};

/*
    Notes:
        - Use an array
        - Short circuit instead of multiple 'input' variables -- JS&JQ page 169
*/