function Candy(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chocolate(name, weight, typeChocolate) {
  Candy.call(this, name, weight);
  this.typeChocolate = typeChocolate;
}

function Marmalade(name, weight, shape) {
  Candy.call(this, name, weight);
  this.shape = shape;
}

function Present(...candy) {
  this.candy = candy;
}

Present.prototype.calculateWeight = function calculateWeight() {
  let weight = 0;

  for (let i = 0; i < this.candy.length; i += 1) {
    weight += +this.candy[i].weight;
  }

  return weight;
};

Present.prototype.sortByWeight = function sortByWeight() {
  this.candy.sort((prev, next) => prev.weight - next.weight);
};

Present.prototype.findCandyByName = function findCandyByName(name) {
  for (let i = 0; i < this.candy.length; i += 1) {
    if (this.candy[i].name === name) {
      return this.candy[i];
    }
  }

  return undefined;
};

Chocolate.prototype = Object.create(Candy.prototype);
Chocolate.prototype.constructor = Chocolate;
Marmalade.prototype = Object.create(Candy.prototype);
Marmalade.prototype.constructor = Marmalade;

const blackChocolate = new Chocolate('twix', '100', 'white');
const whiteChocolate = new Chocolate('kitkat', '50', 'black');
const worms = new Marmalade('Apple', '500', 'worms');
const present = new Present(blackChocolate, whiteChocolate, worms);

module.exports = present;
