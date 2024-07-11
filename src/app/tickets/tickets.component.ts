import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Show {
  title: string;
  image: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  shows: Show[] = [
    {
      title: 'The Best of Broadway',
      image: 'assets/images/bestOfBroadway.png',
      description:
        'Step into the dazzling world of Broadway with The Best of Broadway, a spectacular showcase of the greatest hits from the heart of the theater district. Join us for an unforgettable evening featuring show-stopping performances from beloved musicals such as The Phantom of the Opera, Les Misérables, Wicked, and more. Relive the magic, the music, and the moments that have captivated audiences for generations.',
      date: 'September 15, 2023',
    },
    {
      title: 'La Bohème',
      image: 'assets/images/laBoheme.png',
      description:
        'Experience the timeless romance and heartbreaking drama of Puccini\'s "La Bohème." Follow the lives of young bohemians in Paris as they navigate love, passion, and tragedy. With its unforgettable music and compelling story, "La Bohème" is an opera classic that will captivate and move you. Don\'t miss your chance to witness this masterpiece live on stage.',
      date: 'October 20, 2023',
    },
    {
      title: 'Change the World',
      image: 'assets/images/changeTheWorld2.png',
      description:
        'Join us for a night of inspiring performances aimed at making a difference. This unique concert brings together incredible talent to raise awareness and funds for important causes. Be part of an evening that combines the power of music with the spirit of social change.',
      date: 'November 10, 2023',
    },
  ];

  buyTickets(show: string) {
    // Implement ticket purchase logic here
    console.log(`Buying tickets for ${show}`);
  }
}
