// Subject: The actual object we want to control access to
const realSubject = {
  name: "Real Object",
  getValue: function () {
    return "Value from the real object.";
  }
};

// Proxy: A surrogate object that controls access to the real subject
const proxy = new Proxy(realSubject, {
  get: function (target, property, receiver) {
    // Add behavior before getting a property
    console.log(`Getting property: ${property}`);
    
    // Forward the operation to the real subject
    return Reflect.get(target, property, receiver);
  },
  set: function (target, property, value, receiver) {
    // Add behavior before setting a property
    console.log(`Setting property: ${property} to ${value}`);
    
    // Forward the operation to the real subject
    return Reflect.set(target, property, value, receiver);
  }
});

// Using the proxy
console.log(proxy.name); // Outputs: Getting property: name, Real Object
proxy.name = "New Object"; // Outputs: Setting property: name to New Object
console.log(proxy.getValue()); // Outputs: Getting property: getValue, Value from the real object.
