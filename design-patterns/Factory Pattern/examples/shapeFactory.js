class Shape {
  draw() {
    throw new Error("Abstract Method has no implementation");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Inside Rectangle::draw() method.");
  }
}

class Square extends Shape {
  draw() {
    console.log("Inside Square::draw() method.");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Inside Circle::draw() method.");
  }
}

class ShapeFactory {
  //use getShape method to get object of type shape
  getShape(shapeType) {
    if (shapeType == null) {
      return null;
    }
    if (shapeType.toUpperCase() == "CIRCLE") {
      return new Circle();
    } else if (shapeType.toUpperCase() == "RECTANGLE") {
      return new Rectangle();
    } else if (shapeType.toUpperCase() == "SQUARE") {
      return new Square();
    }

    return null;
  }
}

const shapeFactory = new ShapeFactory();
//get an object of Circle and call its draw method.
const shape1 = shapeFactory.getShape("CIRCLE");

//call draw method of Circle
shape1.draw();

//get an object of Rectangle and call its draw method.
const shape2 = shapeFactory.getShape("RECTANGLE");

//call draw method of Rectangle
shape2.draw();

//get an object of Square and call its draw method.
const shape3 = shapeFactory.getShape("SQUARE");

//call draw method of square
shape3.draw();
