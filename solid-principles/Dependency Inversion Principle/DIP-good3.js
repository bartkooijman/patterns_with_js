// Low-level module (details)
class LightBulb {
  turnOn() {
    console.log('Light bulb is ON');
  }

  turnOff() {
    console.log('Light bulb is OFF');
  }
}

// High-level module depending on an abstraction
class Switch {
  constructor(device) {
    this.device = device;
  }

  operate() {
    // Abstraction: Dependency on an interface (not a concrete implementation)
    this.device.turnOn();
    this.device.turnOff();
  }
}

// Usage adhering to DIP
const lightBulb = new LightBulb();
const switchButton = new Switch(lightBulb);

switchButton.operate();
// Output: Light bulb is ON
// Output: Light bulb is OFF
