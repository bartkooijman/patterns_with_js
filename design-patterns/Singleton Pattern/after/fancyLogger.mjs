class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount() {
    console.log(`Total amount of logs logged so far: ${this.logs.length}`)
  }
}

const logger = new FancyLogger()
Object.freeze(logger)
/**
 * The Object.freeze() method freezes an object. Freezing an object prevents 
 * extensions and makes existing properties non-writable and non-configurable.
 * A frozen object can no longer be changed: new properties cannot be added, 
 * existing properties cannot be removed, their enumerability, configurability, 
 * writability, or value cannot be changed, and the object's prototype 
 * cannot be re-assigned. freeze() returns the same object that was passed in.
 **/ 

export default logger