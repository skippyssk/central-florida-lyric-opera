import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choir.component.html',
  styleUrls: ['./choir.component.css'],
})
export class ChoirComponent {
  constructor(private router: Router) {}

  joinEmailList() {
    window.open(
      'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw5Tbaopgazml_-mv-dvlCaLG0aUE1n2KK453bS4r3UWPHeejM2ZdOEqxbd0-09VHyVON_U_l-GF5MrNYR6F-k85BkmXzZD5DP1lEXsLCbtcLbsvZiqhBtIbRlrkOEzaWSM%3D',
      '_blank'
    );
    console.log('Joining email list');
  }

  goToConcertPage() {
    this.router.navigate(['/concerts']);
  }

  goToDashboard() {
    this.router.navigate(['/choir-dashboard']);
  }
}
