import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-choir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choir.component.html',
  styleUrls: ['./choir.component.css'],
})
export class ChoirComponent {
  constructor(private router: Router, private loggingService: LoggingService) {}

  joinEmailList() {
    this.loggingService.log('Joining email list');
    window.open(
      'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw4jJ8dP3WENd40BxFaEBjFeuOZb4VcB2ymo1KHOVZ_kDZCR2fydYdtyE-O3BcBcTWjNgB2WN4z5Xp_g7b3YpfYm3eA3qBYpNsWzUSZgIb7_YeYdEzQE7O4I',
      '_blank'
    );
  }

  goToConcertPage() {
    this.router.navigate(['/concerts']);
  }

  goToDashboard() {
    this.router.navigate(['/choir-dashboard']);
  }
}
