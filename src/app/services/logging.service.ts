import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  createLog(type: string, message: string) {
    console.log(`${new Date().toISOString()} [${type}] ${message}`);
  }
}
