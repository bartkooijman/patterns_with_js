//Object Literal notation with no encapsulation
const floorPackageCalculatorModule = {
  squareMetersPerPackage: 2.69,
  calculateNumberOfPackages(length, width) {
    return Math.ceil(length*width/this.squareMetersPerPackage)
  }
}

console.log(floorPackageCalculatorModule.squareMetersPerPackage) //what is the output?
console.log(floorPackageCalculatorModule.calculateNumberOfPackages(4,5))