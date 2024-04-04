"use strict";

//Product
class Car {
  constructor() {}
}

//ConcreteProduct
class RaceCar extends Car {
  constructor() {
    super();
    console.log("Race car created");
  }
}

//Factory
class AbstractRaceCarFactory {
  constructor() {}

  FactoryMethod() {}

  SetDownForce() {
    this.product = this.FactoryMethod();
    console.log(this.raceCar instanceof RaceCar);
  }
}

//ConcreteFactory
class RaceCarFactory extends AbstractRaceCarFactory {
  constructor() {
    super();
    console.log("RaceCarFactory created");
  }

  FactoryMethod() {
    return new RaceCar();
  }
}

var factory = new RaceCarFactory();
factory.SetDownForce();
