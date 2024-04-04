const squareMetersPerPackage = 2.69;

const floorPackageCalculatorModule = {
  calculateNumberOfPackages(length, width) {
    return Math.ceil((length * width) / squareMetersPerPackage);
  },
};

module.exports = floorPackageCalculatorModule;