// OBJECT IN JAVASCRIPT
// Creating an object
let person = {
  name: "Ali",
  age: 20,
  city: "Karachi",

  // Method
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing object properties
console.log(person.name);
console.log(person.age);

// Calling object method
person.greet();
