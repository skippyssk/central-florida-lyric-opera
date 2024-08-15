import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Show {
  title: string;
  image: string;
  description: string;
  date: string;
  venue: string;
  time?: string;
  ticketKey: string;
  buttonText: string;
  available: boolean;
}

interface LesserShow {
  title: string;
  image: string;
  description: string;
  date: string;
  venue: string;
  time?: string;
  ticketKey: string;
  buttonText: string;
  available: boolean;
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  unavailableMessage: string = '';
  clubMembershipMessage: string = '';
  showUnavailableBox: boolean = false;
  showClubMembershipBox: boolean = false;
  showTicketOptionsBox: boolean = false;
  currentTicketLink: string = '';
  ticketLinks = {
    bestOfBroadway: 'https://tickets.thevillages.com/32397',
    laBoheme: 'https://www.thesharon.com/schedule.php',
    changeTheWorld: 'https://www.thesharon.com/schedule.php',
    VoicesOfTheNight: 'https://www.thesharon.com/schedule.php',
    threeTenors:
      'https://thevillagesentertainment.com/event/three-tenors-plus-one/',
    operaClub: 'https://operaclubofthevillages.com/join-us',
    openingGala: 'https://operaclubofthevillages.com/join-us',
    popularPuccini: 'https://operaclubofthevillages.com/join-us',
    flamencoFever: 'https://operaclubofthevillages.com',
    treeLighting: 'https://operaclubofthevillages.com/join-us',
    christmas: 'https://operaclubofthevillages.com/join-us',
    christmasSpectacular: 'https://operaclubofthevillages.com/join-us',
    mostlyModern: 'https://operaclubofthevillages.com/join-us',
    broadway: 'https://operaclubofthevillages.com/join-us',
    broadwayStars:
      'https://central-florida-lyric-opera.yapsody.com/event/index/819495?ref=ebtn',
    loveNotes: 'https://operaclubofthevillages.com/join-us',
    vivaVerdi: 'https://operaclubofthevillages.com/join-us',
    hurrayHollywood: 'https://operaclubofthevillages.com/join',
    goldenDays: 'https://operaclubofthevillages.com/join-us',
    // Add more ticket links as needed
  };

  mainShows: Show[] = [
    {
      title: 'The Best of Broadway',
      image: 'assets/images/bestOfBroadway2.webp',
      description:
        'Step into the dazzling world of Broadway with The Best of Broadway, a spectacular showcase of the greatest hits from the heart of the theater district.',
      date: 'October 10, 2024',
      venue: 'Savannah Center',
      time: '4 PM and 7 PM',
      ticketKey: 'bestOfBroadway',
      buttonText: 'Get Tickets',
      available: true,
    },
    {
      title: 'Hooray for Hollywood',
      image: 'assets/images/hollywood.webp',
      description:
        'Enjoy a night of classic and contemporary songs from the silver screen.',
      date: 'January 3, 2025',
      venue: 'Savannah Center',
      time: '4 PM and 7 PM',
      ticketKey: 'hurrayHollywood',
      buttonText: 'Get Tickets',
      available: false,
    },

    {
      title: 'La Bohème',
      image: 'assets/images/laBoheme.webp',
      description:
        'Experience the timeless romance and heartbreaking drama of Puccini\'s "La Bohème."',
      date: 'January 11, 2025',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM and 7 PM',
      ticketKey: 'laBoheme',
      buttonText: 'Get Tickets',
      available: false,
    },
    {
      title: 'Voices OF The Night',
      image: 'assets/images/night3.webp',
      description: 'Experience an unforgettable performance',
      date: 'February 5, 2025',
      venue: 'Manor at Plantation, Leesburg FL',
      time: '7 PM',
      ticketKey: 'voicesOfTheNight',
      buttonText: 'Get Tickets',
      available: false,
    },
    {
      title: 'Three Tenors Plus One',
      image: 'assets/images/threeTenors2.webp',
      description:
        'Experience an unforgettable performance by the Three Tenors Plus One.',
      date: 'February 21, 2025',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM and 7 PM',
      ticketKey: 'threeTenors',
      buttonText: 'Get Tickets',
      available: true,
    },
    {
      title: 'Change the World 2',
      image: 'assets/images/change-the-world-2.webp',
      description:
        'Join us for a night of inspiring performances aimed at making a difference.',
      date: 'April 4, 2025',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM and 7 PM',
      ticketKey: 'changeTheWorld',
      buttonText: 'Get Tickets',
      available: false,
    },
  ];

  lesserShows: LesserShow[] = [
    {
      title: 'Opening Season Gala',
      image: 'assets/images/gala.webp',
      description: 'Join us for a spectacular opening of our new season.',
      date: 'September 26, 2024',
      venue: 'Laurel Manor',
      ticketKey: 'openingGala',
      buttonText: 'Join Club',
      available: false,
    },
    {
      title: 'Popular Puccini',
      image: 'assets/images/puccini.webp',
      description:
        'An evening dedicated to the beloved works of Giacomo Puccini.',
      date: 'October 24, 2024',
      venue: 'Laurel Manor',
      ticketKey: 'popularPuccini',
      buttonText: 'Join Club',
      available: false,
    },
    {
      title: 'Orlando Flaménco Dancers, Classical Guitarist and Singers',
      image: 'assets/images/flamenco.webp',
      description:
        'Experience the passion and energy of Flamenco music and dance.',
      date: 'November 21, 2024',
      venue: 'Hope Lutheran Church',
      ticketKey: 'flamencoFever',
      buttonText: 'Get Tickets',
      available: true,
    },
    {
      title: 'Tree Lighting',
      image: 'assets/images/tree.webp',
      description:
        'A magical evening to kick off the holiday season with music and lights.',
      date: 'November 30, 2024',
      venue: 'Spanish Springs Town Center',
      ticketKey: 'treeLighting',
      buttonText: 'Free Entry',
      available: false,
    },
    {
      title: 'Christmas Around the World',
      image: 'assets/images/Christmas-World.webp',
      description: 'Celebrate the holiday season with popular holiday songs.',
      date: 'December 8, 2024',
      venue: 'Laurel Manor',
      ticketKey: 'christmasWorld',
      buttonText: 'Join Club',
      available: false,
    },
    {
      title: 'Christmas Spectacular',
      image: 'assets/images/christmas.webp',
      description:
        'Our annual holiday extravaganza filled with your favorite Christmas tunes.',
      date: 'December 12, 2024',
      venue: "St Timothy's Catholic Church",
      ticketKey: 'christmasSpectacular',
      buttonText: 'Get Tickets',
      available: false,
    },
    {
      title: 'Mostly Mozart',
      image: 'assets/images/mozart.webp',
      description:
        'An evening dedicated to the timeless works of Wolfgang Amadeus Mozart.',
      date: 'January 23, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'mostlyMozart',
      buttonText: 'Join Club',
      available: false,
    },
    {
      title: 'Broadway Stars with Grant Norman',
      image: 'assets/images/grant-broadway.webp',
      description:
        'Join Broadway star Grant Norman for an unforgettable night of musical theater.',
      date: 'February 4, 2025',
      time: '4pm and 7pm',
      venue: "St Timothy's Catholic Church",
      ticketKey: 'broadwayStars',
      buttonText: 'Get Tickets',
      available: true,
    },
    {
      title: 'Love Notes from Broadway',
      image: 'assets/images/broadway.webp',
      description:
        'Celebrate love with selections from favorite Broadway shows.',
      date: 'February 27, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'loveNotes',
      buttonText: 'Join Club',
      available: false,
    },
    {
      title: 'Viva Verdi',
      image: 'assets/images/verdi.webp',
      description: 'An homage to the great Italian composer Giuseppe Verdi.',
      date: 'March 27, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'vivaVerdi',
      buttonText: 'Join Club',
      available: false,
    },
    {
      title: 'Golden Days: Music of Operetta',
      image: 'assets/images/operetta.webp',
      description:
        'Step back in time with the charming melodies of classic operettas.',
      date: 'May 22, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'goldenDays',
      buttonText: 'Join Club',
      available: false,
    },
  ];

  buyTickets(event: string) {
    console.log(`Buy Tickets clicked for: ${event}`);
    const mainShow = this.mainShows.find((s) => s.ticketKey === event);
    const lesserShow = this.lesserShows.find((s) => s.ticketKey === event);

    if (mainShow) {
      this.handleMainShow(mainShow);
    } else if (lesserShow) {
      this.handleLesserShow(lesserShow);
    } else {
      console.error(`Show not found for ${event}`);
    }
  }

  private handleMainShow(show: Show): void {
    if (show.buttonText === 'Join Club') {
      this.showClubMembershipMessage();
    } else if (show.available) {
      this.showTicketOptions(
        this.ticketLinks[show.ticketKey as keyof typeof this.ticketLinks],
        true
      );
    } else {
      this.showUnavailableMessage();
    }
  }

  private handleLesserShow(show: LesserShow): void {
    if (show.buttonText === 'Join Club') {
      this.showClubMembershipMessage();
    } else if (show.available) {
      window.open(
        this.ticketLinks[show.ticketKey as keyof typeof this.ticketLinks],
        '_blank'
      );
    } else {
      this.showUnavailableMessage();
    }
  }

  private showClubMembershipMessage(): void {
    this.clubMembershipMessage =
      'This is a Private Exclusive Show Free to Members of the Opera Club of the Villages. Click below to become a member.';
    this.showClubMembershipBox = true;
  }

  closeClubMembershipBox(): void {
    this.clubMembershipMessage = '';
    this.showClubMembershipBox = false;
  }

  navigateToJoinUs(): void {
    const joinClubUrl = 'https://operaclubofthevillages.com/join-us';
    window.open(joinClubUrl, '_blank');
    this.closeClubMembershipBox();
  }
  private showUnavailableMessage(): void {
    this.unavailableMessage =
      'We apologize, tickets are not yet available for this performance.';
    this.showUnavailableBox = true;
    setTimeout(() => {
      this.unavailableMessage = '';
      this.showUnavailableBox = false;
    }, 3000);
  }

  showMaestrosInnerCircleButton: boolean = false;

  private showTicketOptions(ticketLink: string, isMainShow: boolean): void {
    this.currentTicketLink = ticketLink;
    this.showTicketOptionsBox = true;
    this.showMaestrosInnerCircleButton = isMainShow;
  }

  joinMaestrosInnerCircle(): void {
    const constantContactUrl =
      'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw4jJ8dP3WENd40BxFaEBjFeuOZb4VcB2ymo1KHOVZ_kDZCR2fydYdtyE-O3BcBcTWjNgB2WN4z5Xp_g7b3YpfYm3eA3qBYpNsWzUSZgIb7_YeYdEzQE7O4I';
    window.open(constantContactUrl, '_blank');
    this.closeTicketOptionsBox();
  }

  proceedToBuyTicket(): void {
    if (this.currentTicketLink) {
      window.open(this.currentTicketLink, '_blank');
    }
    this.closeTicketOptionsBox();
  }

  closeTicketOptionsBox(): void {
    this.showTicketOptionsBox = false;
    this.currentTicketLink = '';
  }
}
