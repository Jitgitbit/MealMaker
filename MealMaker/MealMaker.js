const menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains = mainIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts = dessertIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
    	mains: this.mains,
    	desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
  	const dishes = this._courses[courseName];
    const randomIndex = 	  Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
	},
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. At the total price of ${totalPrice} euro.`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 6.00);
menu.addDishToCourse('appetizers', 'nem', 4.00);
menu.addDishToCourse('appetizers', 'cheese', 5.00);
menu.addDishToCourse('appetizers', 'olives', 2.00);
menu.addDishToCourse('mains', 'steak', 11.00);
menu.addDishToCourse('mains', 'pasta', 6.00);
menu.addDishToCourse('mains', 'fish', 7.00);
menu.addDishToCourse('mains', 'big salad', 9.00);
menu.addDishToCourse('desserts', 'cake', 3.00);
menu.addDishToCourse('desserts', 'fruit', 4.00);
menu.addDishToCourse('desserts', 'sorbet', 5.00);
menu.addDishToCourse('desserts', 'pudding', 2.00);


const meal = menu.generateRandomMeal();
console.log(meal);