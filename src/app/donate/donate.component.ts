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
  donateImages = [
    'assets/images/donate1.jpg',
    'assets/images/donate2.jpg',
    'assets/images/donate3.jpg',
  ];

  donateViaPaypal() {
    // Implement PayPal donation logic here
    console.log('Donating via PayPal');
    // You would typically redirect to a PayPal donation page or open a PayPal donation modal
  }
}
