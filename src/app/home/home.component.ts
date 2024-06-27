import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Welcome to Central Florida Lyric Opera</h2>
    <p>
      Experience the beauty and passion of opera in the heart of Central
      Florida. Join us for unforgettable performances and discover new talent in
      our resident artist program.
    </p>
    <a routerLink="/tickets" class="cta-button">Buy Tickets Now</a>
  `,
  styles: [
    `
      .cta-button {
        display: inline-block;
        background-color: #ffd700;
        color: #000;
        padding: 10px 20px;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
        margin-top: 20px;
      }
    `,
  ],
})
export class HomeComponent {}
