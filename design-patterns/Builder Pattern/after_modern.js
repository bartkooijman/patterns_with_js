class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor({name, age, phone , address }) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

//The varaibles taken in by the constructor are optional and get mapped correctly
let user = new User({ name: 'Bob', address: new Address('12345', 'Main St.') })

console.log(user)