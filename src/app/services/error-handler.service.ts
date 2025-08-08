import { Injectable, ErrorHandler } from '@angular/core';
import { LoggingService } from './logging.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private loggingService: LoggingService) {}

  handleError(error: Error): void {
    this.loggingService.error('An error occurred:', error);
    
    // In production, you might want to send this to an error reporting service
    // like Sentry, LogRocket, etc.
    
    // Don't expose error details to console in production
    if (!environment.production) {
      console.error('Global error handler caught:', error);
    }
  }
}

