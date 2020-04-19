export class LoggingService {
  createLog(type: string, message: string) {
    console.log(`${new Date().toISOString()} [${type}] ${message}`);
  }
}
