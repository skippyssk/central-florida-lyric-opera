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
    laBoheme: 'https://www.thevillagesentertainment.com/buy-tickets/la-boheme/',
    changeTheWorld:
      'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
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
    hurrayHollywood:
      'https://www.thevillagesentertainment.com/buy-tickets/hooray-for-hollywood/',
    goldenDays: 'https://operaclubofthevillages.com/join-us',
    fernando:
      'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/',
    GalaSharon: 'https://smartseat.thevillages.com/?itemnumber=33264#/',
    // Add more ticket links as needed
  };

  mainShows: Show[] = [
    {
      title: 'Bill Doherty & Fernando Varela - Together Again!',
      image: 'assets/images/fernando.webp',
      description:
        'Experience the extraordinary reunion of Maestro Bill Doherty and Fernando Varela—America’s Got Talent finalist with Forte—alongside remarkable local performers.',
      date: 'April 21, 2025',
      time: '4pm and 7pm',
      venue: 'Savannah Center',
      ticketKey: 'fernando',
      buttonText: 'Get Tickets',

      available: true,
    },
    {
      title: 'The Sharon: Inaugural Gala',
      image: 'assets/images/sharon.jpg',
      description:
        'This spring, join Significant Productions as we Celebrate a Decade on Stage at our inaugural fundraising gala! Hosted by founders Jason Goedken and Whitney Morse at The Sharon L. Morse Performing Arts Center, the evening honors ten extraordinary years of artists, community, and impact. Enjoy a mesmerizing live performance featuring Heather Ard and Alec Speers, beautifully accompanied by Maestro Bill Doherty on piano. Every bid, donation, and contribution made during the event will directly empower the future of live performances and artist-driven storytelling at The Sharon and The Studio Theatre. Don’t miss this chance to be a part of a transformative celebration that champions the vibrant spirit of the arts! ',
      date: 'April 26, 2025',
      time: '5:30pm',
      venue: 'The Sharon L. Morse Performing Arts Center',
      ticketKey: 'GalaSharon',
      buttonText: 'Buy Tickets Now',
      available: true,
    },
    {
      title: 'Celebrate America',
      image: 'assets/images/vets.png',
      description:
        '**Celebrate America** is an evening of music and gratitude honoring the men and women who have worn our nation’s uniform. Surrounded by stirring patriotic anthems and timeless hymns of freedom, we’ll salute the sacrifices of generations past while inspiring hope for the future. Join us, lift your voices, and let the power of music remind us all of what makes America worth celebrating. ',
      date: 'May 22, 2025',
      time: '3pm-7pm',
      venue: 'The Sharon L. Morse Performing Arts Center',
      ticketKey: 'GalaSharon',
      buttonText: 'Unavailable',
      available: false,
    },
  ];

  lesserShows: LesserShow[] = [
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
    {
      title: 'September Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Sept 25, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'goldenDays',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'October Savannah Center Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Oct 9, 2025',
      venue: 'Savannah Center',
      ticketKey: '',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'October Opera Club show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Oct 23, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'Catch a Rising Star',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Oct 30, 2025',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'November Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Nov 20, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'Opera Club Christmas Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Dec 7, 2025',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'St. Timothys Christmas Concert',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Dec 18, 2025',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'January Savannah Center Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 9, 2026',
      venue: 'Savannah Center',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'Grant Norman Broadway Stars',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 20, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'January Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 22, 2026',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'January Opera',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 30, 2026',
      venue: 'Sharon P.A.C.',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: '3 Tenors Plus One',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Feb 20, 2026',
      venue: 'Sharon P.A.C.',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'February Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Feb 26, 2026',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'March Sharon Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'March 13, 2026',
      venue: 'Sharon P.A.C.',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'March Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'March 26, 2026',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'April Savannah Center Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'April 15, 2026',
      venue: 'Savannah Center',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'April Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'April 23, 2026',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'Celebrate America',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'May 21, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
    },
    {
      title: 'May Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'May 28, 2026',
      venue: 'Laurel Manor',
      ticketKey: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
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
