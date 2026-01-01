# Objects in JavaScript

**Objects** in JavaScript are collections of key–value pairs used to store related data and functionality.  
They allow developers to represent real-world entities, access properties, and define methods.

## Example

```javascript
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
