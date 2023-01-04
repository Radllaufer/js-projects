// reusable variables
let x;
let y;

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

const storyWords = story.split(' ');
console.log('Original word length: ' + storyWords.length);


const betterWords = storyWords.filter(word => {
    if (!unnecessaryWords.includes(word)) {
        return word;
    }
});
console.log('Formatted word length: ' + betterWords.length);

(function () { // logs the number of overused words
    x = 0;
    betterWords.forEach(word => {
        if (overusedWords.includes(word)) {
            x++;

        }
    });
    console.log('number of overused words: ' + x);
})();


(function () { // logs the total number of sentences
    x = 0;
    betterWords.forEach(word => {
        if (word.includes('.') || word.includes('!') || word.includes('?')) {
            x++;
        }
    });
    console.log('number of sentences: ' + x);
})();

console.log(); // space
console.log(betterWords.join(' '));



x = 0;
y = 0;

const amountOfWords = (() => {
    let individualWords = [];
    let wordCount = [];

    betterWords.map(word => {
        if (!individualWords.includes(word)) {
            individualWords.push(word);
        }
    });
    const counter = (array, word) => {
        return array.filter(item => item === word).length;
    }
    for (let i = 0; i < individualWords.length; i++) {
        wordCount.push({ w: individualWords[i], c: counter(betterWords, individualWords[i]) });
    }
    return wordCount;
})();

const mostUsedWord = (() => {
    const largestCount = (() => {
        let countArray = [];
        for (let i = 0; i < amountOfWords.length; i++) {
            countArray.push(amountOfWords[i].c);
        }
        return Math.max(...countArray);
    })();

    const mostUsedWordsArray = (() => {
        let arr = [];
        for (let i = 0; i < amountOfWords.length; i++) {
            if (amountOfWords[i].c === largestCount) {
                arr.push(amountOfWords[i].w);
            }
        }
        return arr;
    })();

    if (mostUsedWordsArray.length === 1) {
        return `The word \'${mostUsedWordsArray[0]}\' is used ${largestCount} times`;
    } else if (mostUsedWordsArray.length === 2) {
        return `The words \'${mostUsedWordsArray[0]}\' and \'${mostUsedWordsArray[1]}\' are used ${largestCount} times`
    } else if (mostUsedWordsArray.length > 2) {
        return `The words \'${mostUsedWordsArray.join(', ')}\' are used ${largestCount} times`
    }
})();
console.log();
console.log(mostUsedWord);
