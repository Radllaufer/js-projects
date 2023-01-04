/* 
    notes:
    - put meal variable into menu object
    - make getters and setters work
*/

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get course() {
        return this[courseName];
    },
    set course(courseIn) {
        return this[courseName] = courseIn;
    },
    get courses() {
        return {
            appetizers,
            mains,
            desserts,
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        const randI = Math.floor(Math.random() * dishes.length);
        return dishes[randI];
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;

        return `This 3 course menu will start with ${appetizer.name} followed by the main course ${main.name} finishing off with ${dessert.name} as a dessert. It will cost you €${totalPrice} in total.`;
    },
    addMenu() {
        const menuList = [
            // course, dish, price in euros
            ['appetizers', 'tomato soup', 3],
            ['appetizers', 'salat', 2],
            ['mains', 'mashed potatoes', 6],
            ['mains', 'kärnter nudeln', 7],
            ['desserts', 'yorkshire pudding', 4],
            ['desserts', 'germknödel', 4]
        ];
        i = 0;
        while (i < menuList.length) {
            this.addDishToCourse(menuList[i][0], menuList[i][1], menuList[i][2]);
            i++;
        };
    },
};

menu.addMenu();

let meal = menu.generateRandomMeal();
console.log(meal);
