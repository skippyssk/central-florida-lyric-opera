import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private isProduction = environment.production;

  log(message: string, data?: any): void {
    if (!this.isProduction) {
      console.log(`[LOG] ${message}`, data);
    }
  }

  error(message: string, error?: any): void {
    if (!this.isProduction) {
      console.error(`[ERROR] ${message}`, error);
    }
    // In production, you might want to send errors to a logging service
  }

  warn(message: string, data?: any): void {
    if (!this.isProduction) {
      console.warn(`[WARN] ${message}`, data);
    }
  }

  info(message: string, data?: any): void {
    if (!this.isProduction) {
      console.info(`[INFO] ${message}`, data);
    }
  }
}

