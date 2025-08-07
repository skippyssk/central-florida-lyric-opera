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
      title: 'Movie Magic',
      image: 'assets/images/MM.png',
      description:
        'Celebrate America is an evening of music and gratitude honoring the men and women who have worn our nation’s uniform. Surrounded by stirring patriotic anthems and timeless hymns of freedom, we’ll salute the sacrifices of generations past while inspiring hope for the future. Join us, lift your voices, and let the power of music remind us all of what makes America worth celebrating.',
      date: 'May 22, 2025',
      venue: 'The Savannah Center',
      time: '3 PM & 7 PM',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },
    {
      title: 'Catch a Rising Star (Prodigies: Stars of Tomorrow) ',
      image: 'assets/images/CRSProd.png',
      description:
        'Celebrate America is an evening of music and gratitude honoring the men and women who have worn our nation’s uniform. Surrounded by stirring patriotic anthems and timeless hymns of freedom, we’ll salute the sacrifices of generations past while inspiring hope for the future. Join us, lift your voices, and let the power of music remind us all of what makes America worth celebrating.',
      date: 'April 4, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '3 PM & 7 PM',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },
    {
      title: 'Christmas Spectacular',
      image: 'assets/images/CSWide.png',
      description:
        'Celebrate America is an evening of music and gratitude honoring the men and women who have worn our nation’s uniform. Surrounded by stirring patriotic anthems and timeless hymns of freedom, we’ll salute the sacrifices of generations past while inspiring hope for the future. Join us, lift your voices, and let the power of music remind us all of what makes America worth celebrating.',
      date: 'April 4, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '3 PM & 7 PM',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },
  ];

  lesserShows: LesserShow[] = [
    {
      title: 'An Intimate Evening of Andrew LLoyd Webber',
      image: 'assets/images/AWRRRR1Square.png',
      description: 'TBD.',
      date: 'Jan 09, 2026',
      venue: 'The Savaannah Center',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },
    {
      title: 'Broadway Stars with Grant Norman',
      image: 'assets/images/grantPhantomSquare.png',
      description: 'TBD.',
      date: 'Jan 20, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },

    {
      title: "Bizet's Carmen",
      image: 'assets/images/Carmen ArtworkSquare.png',
      description: 'TBD.',
      date: 'Jan 30, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },

    {
      title: 'Change The World',
      image: 'assets/images/CW3 Square.png',
      description: 'TBD.',
      date: 'Jan 22, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },

    {
      title: 'Together Again',
      image: 'assets/images/fernando.webp',
      description: 'TBD.',
      date: 'April 25, 2026',
      venue: 'Savannah Center',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
      available: false,
    },
    {
      title: 'Celebrate America',
      image: 'assets/images/CA1Square.png',
      description: 'TBD.',
      date: 'May 21, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'goldenDays',
      buttonText: 'Coming Soon',
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
