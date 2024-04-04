// Violating LSP
class BadSquare extends Shape {
  constructor(side) {
    super(side, side);
  }

  // Overriding the area method incorrectly
  area() {
    return this.width * 2; // Incorrect calculation for a square
  }
}

// Function expecting a Shape, but BadSquare violates LSP
function printArea(shape) {
  console.log(`Area: ${shape.area()}`);
}

// Usage violating LSP
const badSquare = new BadSquare(5);

// This will produce incorrect results
printArea(badSquare); // Output: Area: 10
