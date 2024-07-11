import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choir.component.html',
  styleUrls: ['./choir.component.css'],
})
export class ChoirComponent {
  joinEmailList() {
    // Implement email list joining logic or redirect to the appropriate page
    console.log('Joining email list');
  }

  goToDropbox() {
    // Redirect to Dropbox
    window.open('https://www.dropbox.com/your-choir-folder', '_blank');
  }

  goToConcertPage() {
    // Redirect to concert page
    // You might want to use Angular router instead if it's an internal page
    window.open('/concerts', '_blank');
  }
}
