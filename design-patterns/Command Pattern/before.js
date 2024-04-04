//The class below by itself works and is certainly not very badly designed
//The question is how would this code look like if the requirement is that 
//you have to keep track of all calculations performed and undo them (LIFO)

class Calculator {
  constructor() {
    this.value = 0
  }

  add(valueToAdd) {
    this.value = this.value + valueToAdd
  }

  subtract(valueToSubtract) {
    this.value = this.value - valueToSubtract
  }

  multiply(valueToMultiply) {
    this.value = this.value * valueToMultiply
  }

  divide(valueToDivide) {
    this.value = this.value / valueToDivide
  }
}

const calculator = new Calculator()
calculator.add(5)
calculator.multiply(10)
calculator.subtract(25)

console.log(calculator.value)