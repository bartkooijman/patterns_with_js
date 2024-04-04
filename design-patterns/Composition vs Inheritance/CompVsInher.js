class Vehicle {
  constructor()

  accelerate() {
  }

  howLongItTakesToGetToTheOffice() {
    throw new Error("Abstract Method has no implementation");
    //Not implemented here but in subtypes
    //This is hard in composition
  }
}

class Car extends Vehicle {
  constructor()

  hasFuelInTank() {
  }
}

class Bike {
  constructor() {
    this.vehicle = new Vehicle();
  }

  hasBell() {
  }
}

const car = new Car()
const bike = new Bike()

//Both have reuse of the Vehicle
car.accelerate();
bike.vehicle.accelerate()