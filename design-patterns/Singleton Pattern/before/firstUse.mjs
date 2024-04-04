import FancyLogger from './fancyLogger.mjs'

const logger = new FancyLogger()

export default function logFirstImplementation() {
  logger.printLogCount()
  logger.log('First file')
  logger.printLogCount()
}