const prompt = require('prompt-sync')({sigint: true});

class Field {
    constructor(f) {
        this._f = f;
        this._dimensions = {
            width: this.f[0].length,
            height: this.f.length
        };
        this._y = this.f.findIndex( e => e.includes('*') );
        this._x = this.f[this.y].findIndex( e => e === '*' );
    }

    static generateRandomField(width, height, percentage) {
        const resultArray = [];
        
        for (let i = 0; i < height; i++) { // create an empty field
            resultArray.push(['░']);

            for (let j = 0; j < width - 1; j++) {
                resultArray[i].push('░');
            }
        }


        const getRandomCoords = () => {
            return { x: Math.floor( Math.random() * width ), y: Math.floor( Math.random() * height ) }
        }

        const playerCoords = getRandomCoords();
        const hatCoords = getRandomCoords();

        while (playerCoords === hatCoords) {
            hatCoords = getRandomCoords();
        }

        resultArray[playerCoords.y][playerCoords.x] = '*';
        resultArray[hatCoords.y][hatCoords.x] = '^';


        const replacableTiles = Math.floor( ((width * height) / 100) * percentage );
    
        for (let i = 0; i < replacableTiles; i++) { // push holes to random coordinates
            let coords = getRandomCoords();
            
            while (resultArray[coords.y][coords.x] === 'O' ||
                resultArray[coords.y][coords.x] === '*' ||
                resultArray[coords.y][coords.x] === '^') {
                    
                coords = getRandomCoords();
            }
            resultArray[coords.y][coords.x] = 'O';
        }


        const checkIfValid = () => {
            let connectedCoords = [playerCoords];
            let oldCoords = [playerCoords];
            let newCoords = [];
            let openTilesCoords = [];
            let finalCoords = [];
            const checkArray = [ // coordinates used to look for nearby open tiles
                { x: 0, y: -1 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
                { x: -1, y: 0 }
            ];

            for (let i = 0; i < resultArray.length; i++) { // put all open tiles into an array
                for (let j = 0; j < resultArray[i].length; j++) {
                    if (resultArray[i][j] === '░' || resultArray[i][j] === '*' || resultArray[i][j] === '^') {
                        openTilesCoords.push( {x: j, y: i} );
                    }
                }
            }

            for (let i = 0; i < width; i++) { // put all connected tiles into an array
                for (let j = 0; j < checkArray.length; j++) {
                    for (let k = 0; k < openTilesCoords.length; k++) {
                        for (let l = 0; l < oldCoords.length; l++) {
                            if (
                                (openTilesCoords[k].x + '' + openTilesCoords[k].y)
                                    === 
                                ((oldCoords[l].x + checkArray[j].x) + '' + (oldCoords[l].y + checkArray[j].y)) 
                                ) {
                                    connectedCoords.push({
                                        x: (oldCoords[l].x + checkArray[j].x),
                                        y: (oldCoords[l].y + checkArray[j].y)
                                    });
                                    
                                    newCoords.push({
                                        x: (oldCoords[l].x + checkArray[j].x),
                                        y: (oldCoords[l].y + checkArray[j].y)
                                    });
                            }
                        }
                    }
                }
                oldCoords = newCoords.map(e => e);
                newCoords = [];
            }

            for (let i = 0; i < connectedCoords.length; i++) { // remove all duplicates
                for (let j = 0; j < finalCoords.length; j++) {
                    if (finalCoords[j].x === connectedCoords[i].x && finalCoords[j].y === connectedCoords[i].y) {
                        finalCoords.splice(j, 1);
                    }
                }
                finalCoords.push(connectedCoords[i]);
            }

            for (let i = 0; i < finalCoords.length; i++) { // check if Field includes player and hat
                if (finalCoords[i].x === hatCoords.x && finalCoords[i].y === hatCoords.y) {
                    for (let j = 0; j < finalCoords.length; j++) {
                        if (finalCoords[j].x === playerCoords.x && finalCoords[j].y === playerCoords.y) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        if (checkIfValid()) {
            return resultArray; // returns undefined if field is unplayable or doesn't include the player and hat
        }
    }

    static generateField(width, height, percentage) {
        let randomField = this.generateRandomField(width, height, percentage);

        while (randomField === undefined) {
            randomField = this.generateRandomField(width, height, percentage);
        }
        return randomField;
    }


    get f() {
        return this._f;
    }

    get dimensions() {
        return this._dimensions;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(e) {
        this._x = e;
    }

    set y(e) {
        this._y = e;
    }


    print() {
        for (let i = 0; i < this.f.length; i++) {
            console.log( this.f[i].join('') );
        }
    }

    play() {
        console.log('________________');
        let direction = prompt('Find Your Hat | ');

        if (direction !== 'w' && direction !== 'a' && direction !== 's' && direction !== 'd') {
            console.clear();
            this.print();
            console.log('________________');
            console.log('Use WASD + Enter');
            this.play();
            return;
        }

        switch (direction) {
            case 'w':
                this.y--;
                break;
            case 'a':
                this.x--;
                break;
            case 's':
                this.y++;
                break;
            case 'd':
                this.x++;
                break;

            default:
                break;
        }

        const endGame = (message) => {
            console.log();
            console.log(message);
            console.timeEnd('Time');
        }

        // game outcomes
        if (this.x < 0 || 
            this.x >= this.dimensions.width || 
            this.y < 0 || 
            this.y >= this.dimensions.height) {
                
            endGame('You fell off the board')
            return;
        }
        if (this.f[this.y][this.x] === 'O') {
            endGame('You fell into a hole, fool')
            return;
        }
        if (this.f[this.y][this.x] === '*') {
            endGame('Going back is for cowards')
            return;
        }
        if (this.f[this.y][this.x] === '^') {
            endGame('Well done, you found your hat!')
            return;
        }
        this.f[this.y][this.x] = '*';
        
        console.clear();
        this.print();
        this.play();
    }
}



const newGame = (level) => {
    console.clear();
    console.time('Time');
    level.print();
    level.play();
}



const lv1 = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);
const lv2 = new Field([
    ['O', 'O', '░', '░', '░'],
    ['*', '░', '░', 'O', '░'],
    ['O', 'O', 'O', '░', '░'],
    ['░', '░', '░', '░', 'O'],
    ['O', '░', 'O', '░', 'O'],
    ['^', '░', 'O', '░', '░'],
])
const lv3 = new Field([ 
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', '^', 'O', '░', '░', '░', '░', '░', '░', '░', 'O'],
    ['O', '░', 'O', '░', 'O', 'O', 'O', 'O', 'O', '░', 'O'],
    ['O', '░', 'O', '░', 'O', '░', '░', '░', 'O', '░', 'O'],
    ['O', '░', 'O', '░', 'O', '░', 'O', '░', 'O', '░', 'O'],
    ['O', '░', 'O', '░', 'O', '*', 'O', '░', 'O', '░', 'O'],
    ['O', '░', 'O', '░', 'O', 'O', 'O', '░', 'O', '░', 'O'],
    ['O', '░', 'O', '░', '░', '░', '░', '░', 'O', '░', 'O'],
    ['O', '░', 'O', 'O', 'O', 'O', 'O', 'O', 'O', '░', 'O'],
    ['O', '░', '░', '░', '░', '░', '░', '░', '░', '░', 'O'],
    ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
])

const randomLevel = new Field(Field.generateField(8, 8, 40)); 
/*  - "(8, 8, 40)" is a good starting point
    - should't go much higher than "(12, 10, 50)"
    - escape with ctrl+c if you get stuck           */



newGame(randomLevel);
