let currentCard;
let counter = 0;

while (currentCard !== 16) {
    currentCard = (Math.floor(Math.random() * 53));
    counter++;
}

console.log('Desired card: ' + currentCard);
console.log(`It took ${counter} guesses`);