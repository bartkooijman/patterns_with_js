// Anti-pattern: Modifying Object prototype
Object.prototype.myCustomMethod = function() {
  console.log('This is a custom method added to all objects!');
};

// Usage
const myObject = {};
myObject.myCustomMethod(); // Outputs: This is a custom method added to all objects!

const myArray = [1, 2, 3];
myArray.myCustomMethod(); // Outputs: This is a custom method added to all objects!
