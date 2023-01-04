// dogFactory
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,

        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },

        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },

        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this.weight++;
        }
    }

};

// groceries
const groceries = (array) => {
    const sentence = (() => {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i].item);
        }
        if (newArray.length > 1) {
            newArray.splice((array.length - 1), 0, 'and');
        }
        for (let i = 0; i < (newArray.length - 3); i++) {
            newArray[i] += ',';
        }
        return newArray.join(' ');
    })();
    return sentence;
}

console.log(groceries([
    { item: 'Lettuce' },
    {item: 'Onions'}, 
    {item: 'Tomatoes'}, 
    {item: 'Rigatoni'}
]));
