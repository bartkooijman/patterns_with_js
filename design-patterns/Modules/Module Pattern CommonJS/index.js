const testModule = require("./module/module.js");

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();
console.log(testModule.counter); //undefined
