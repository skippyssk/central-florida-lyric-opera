import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent {
  donateImages = ['assets/images/threeTenors.webp', 'assets/images/bill2.webp'];

  paypalDonateUrl = 'https://www.paypal.com/ncp/payment/4KVSTHRDKZGQA';

  donateViaPaypal() {
    window.open(this.paypalDonateUrl, '_blank');
  }
}
