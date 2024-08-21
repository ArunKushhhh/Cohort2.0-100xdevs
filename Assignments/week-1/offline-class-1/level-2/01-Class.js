// const dog = {
//   name: "Doggie",
//   legCount: 4,
//   speaks: "bhow bhow",
// };
// console.log("animal + dog["name"] + " " + dog["speaks"]);

// const cat = {
//   name: "Cat",
//   legCount: 4,
//   speaks: "meow meow",
// };
// console.log("animal + cat["name"] + " " + cat["speaks"]);

//instead of making a object for every animal we can define a class that works for every animal

//class is a kind of blueprint
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  //we can aslo have static functions inside a class
  //these are associated to the class
  static myType() {
    console.log(Animal);
  }

  describe() {
    return `${this.name} has ${this.legCount} legs and speaks ${this.speaks}`;
  }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");

console.log(cat.describe());
console.log(dog.describe());
