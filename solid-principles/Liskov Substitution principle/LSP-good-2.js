// Shape class
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Rectangle class extending Shape
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

// Square class extending Shape
class Square extends Shape {
  constructor(side) {
    super(side, side);
  }
}

// Function using LSP
function printArea(shape) {
  console.log(`Area: ${shape.area()}`);
}

// Usage of LSP
const rectangle = new Rectangle(5, 10);
const square = new Square(5);

printArea(rectangle); // Output: Area: 50
printArea(square);    // Output: Area: 25
