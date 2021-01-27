const _ = {
    clamp(n, low, high){
        return Math.min( Math.max ( n, low ) , high );
    },
    inRange(n, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            const swap = end;
            start = start;
            end = swap;
        }
        return new Boolean(n >= start && n < end).toString();
    }, 
    words(string) {
        return string.replace(/,/ig, '').split(' ');
    }, 
    pad(string, length, char) {
        if (length >= string.length) {
            const padding = (length - string.length) / 2;
            return char.repeat( Math.floor(padding)) + string + char.repeat(Math.ceil(padding) );
        } else {
            return string;
        }
    },
    has(object, key) {
        const hasValue = object[key];
            if (hasValue !== undefined) {
                return true;
            } else {
                return false;
            }
    }, 
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            let newKey = object[key];
            invertedObject[newKey] = key;
        }
        return invertedObject;
    }, 
    findKey(object, predicate) {
        for (let key in object) {
            let val = object[key];
            let predicateReturnValue = predicate(val);

            if (predicateReturnValue) return key;
        }
        return undefined;
    }, 
    drop(array, n) {
        if (n === undefined) n = 1;
        
        return array.slice(n, array.length);
    }, 
    dropWhile(array, predicate) {
        let x = 0;
        const callBack = (element, index) => {
            if (!predicate(element, index, array) === true) x++;

            return x;
        };
        let dropNumber = array.findIndex(callBack);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size) {
        let newArray = [];
        let tempArray = [];

        if (size === undefined) size = 1;       
             
        for (let i = 0; i < array.length; i += size) {
            for (let j = 0; j < size; j++) {
                tempArray.push(array[(i)]);
                i++;
                if (array[i] === undefined) break;
            }
            i -= size;
            newArray.push(tempArray);
            tempArray = [];
        }
        return newArray;
    }
};

console.log(_.chunk([1, 2, 3, 4, 5], 3));



// Do not write or modify code below this line.
module.exports = _;