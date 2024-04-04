class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

//The constructor forces us to also set the age and phone to undefined
//With even bigger constructors the code gets hard to read/maintain
//We can leave the undefined parameter values out but then age becomes a new address
const user = new User(
  "Bob",
  undefined,
  undefined,
  new Address("12345", "Main St.")
);

console.log(user);
