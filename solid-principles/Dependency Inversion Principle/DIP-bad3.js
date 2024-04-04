// Violating DIP: High-level module depends on a low-level module
class Button {
  constructor() {
    this.lightBulb = new LightBulb(); // Violates DIP by depending on a low-level module directly
  }

  operate() {
    this.lightBulb.turnOn();
    this.lightBulb.turnOff();
  }
}

// Low-level module (details)
class LightBulb {
  turnOn() {
    console.log('Light bulb is ON');
  }

  turnOff() {
    console.log('Light bulb is OFF');
  }
}

// Usage violating DIP
const button = new Button();
button.operate();
// Output: Light bulb is ON
// Output: Light bulb is OFF
