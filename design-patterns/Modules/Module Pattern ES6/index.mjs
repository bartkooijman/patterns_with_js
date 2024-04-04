import testModule from "./module/module.mjs";

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();
console.log(testModule.counter); // what is the output?
