//Module using a closure
var testModule = (function () {
  var counter = 0;
  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    },
  };
})();

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset // Outputs: counter value prior to reset: 
testModule.resetCounter();
console.log(testModule.counter); //undefined
