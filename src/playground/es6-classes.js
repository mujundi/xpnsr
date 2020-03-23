class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription(); // getDescription() from parent

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler("Musa Jundi", 26, "Miami");
const anon = new Traveler();

// console.log(me);
console.log(me.getGreeting());
// console.log(me.getDescription());
// console.log(me.hasMajor());
// console.log(me.getDescription());

// console.log(anon);
console.log(anon.getGreeting());
// console.log(anon.getDescription());
// console.log(anon.hasMajor());
// console.log(anon.getDescription());
