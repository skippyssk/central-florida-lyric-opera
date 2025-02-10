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
    // Add more ticket links as needed
  };

  mainShows: Show[] = [
    {
      title: 'Broadway Stars with Grant Norman',
      image: 'assets/images/grant.webp',
      description:
        'Join Master of Ceremonies Grant Norman, (best known for his portrayal of Phantom in Phantom of the Opera (Broadway) as he takes us on a musical journey along with fellow Broadway stars Melissa Minyard (LES MIS), David Chernault (ANNIE), Christina Sivrich (GREASE), Brian Minyard (ANNIE GET YOUR GUN), Renee Lawless (WICKED on Broadway and TV Star of “The Have & Have Nots") as they talk and sing us through their famed roles in some of the greatest Broadway musicals ever written. Each of these dynamic performers will bring to life their most famous songs and characters - right before your very eyes. In addition, they will perform other famous Broadway duets, trios and ensembles along with the St Timothy Catholic Church Choir and other professional soloists from the Central Florida Lyric Opera. This powerful and charismatic show is sure to delight!  Accompanied on the grand piano by Maestro Bill Doherty.',
      date: 'March 13, 2025',
      time: '4pm and 7pm',
      venue: "St Timothy's Catholic Church",
      ticketKey: 'broadwayStars',
      buttonText: 'Get Tickets',
      available: true,
    },
    {
      title: 'Change the World 2',
      image: 'assets/images/Change2.webp',
      description:
        'The wait is over—Change The World is back!  Celebrate this uplifting event filled with music and community, featuring two extraordinary performances by the brilliant Maestro Bill Doherty and a host of talented local artists. Together, they’ll deliver songs of Inspiration, Love, and Hope, spreading a message of peace across the globe. This event is more than just a concert—it’s an opportunity to create meaningful change. A portion of the proceeds will support the National Multiple Sclerosis Society, making a positive impact through compassion and generosity. Join us for an unforgettable evening of joy, connection, and purpose. Mark your calendars and secure your tickets today! Together, we can Change The World.',
      date: 'April 4, 2025',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM and 7 PM',
      ticketKey: 'changeTheWorld',
      buttonText: 'Get Tickets',
      available: true,
    },
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
  ];

  lesserShows: LesserShow[] = [
    {
      title: 'Three Tenors Plus One',
      image: 'assets/images/3T1.webp',
      description:
        'Experience a spectacular evening of music in support of the Harold S. Schwartz Music Scholarship.',
      date: 'February 21, 2025',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM and 7 PM',
      ticketKey: 'threeTenors',
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
      title: 'Springtime in Paris',
      image: 'assets/images/spring4.webp',
      description:
        'Celebrate the romance and elegance of the French repertoire in an evening of enchanting art songs and arias!',
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
