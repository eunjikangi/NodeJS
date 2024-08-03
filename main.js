/*
// Ch2-2. Data Type

import getType from "./getType"

console.log(typeof 'hello world!')
console.log(typeof 123)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])
console.log(typeof undefined)

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType([]));
*/

// Variable Scope
// Var : 함수레벨 scope, memory leak 유발
// let, const : 블록레벨 scope 

// Type conversion

// this
 const timer = {
  name1: "Eunji",
  name2: "Kang",
  name3: "Ji",

  timeout: function() {
    // Print Well
    console.log(this.name1);

    setTimeout(() => {
      // Print well
      console.log(this.name2);
    }, 200)
  },

  testFunc: () => {
    // Undefined
    console.log(this.name3);

  }
 }
 // timer.timeout();
 // timer.testFunc();


// ES6 Classes

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  };

  // Prototype
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
    console.log("Vehicle")
  }
}

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    // 부모 Class의 construct를 호출
    super(name, wheel)
    console.log("Bicycle")
  }
}

const myBicycle = new Bicycle('삼천리', 2)
const daughterBicycle = new Bicycle('세발', 3)

console.log(myBicycle);
console.log(daughterBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const myCar = new Car("포르쉐", 4 , true)
console.log(myCar);

