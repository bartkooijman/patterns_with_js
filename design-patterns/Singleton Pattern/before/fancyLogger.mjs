export default class FancyLogger {
  constructor() {
    this.logs = []
  }

  log(message) {
    this.logs.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount() {
    console.log(`Total amount of logs logged so far: ${this.logs.length}`)
  }
}