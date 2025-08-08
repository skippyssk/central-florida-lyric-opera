import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent, ShowListShow } from '../show-list.component';
import { LoggingService } from '../services/logging.service';

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
  imports: [CommonModule, ShowListComponent],
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

  constructor(private loggingService: LoggingService) {}
  ticketLinks = {
    bestOfBroadway: 'https://tickets.thevillages.com/32397',
    laBoheme: 'https://www.thevillagesentertainment.com/buy-tickets/la-boheme/',
    changeTheWorld:
      'https://www.thesharon.com/event.php?id=1133&title=Change-The-World',
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
    loveNotes: 'https://operaclubofthevillages.com/join-us',
    vivaVerdi: 'https://operaclubofthevillages.com/join-us',
    hurrayHollywood:
      'https://www.thevillagesentertainment.com/buy-tickets/hooray-for-hollywood/',
    goldenDays: 'https://operaclubofthevillages.com/join-us',
    risingStar: 'https://operaclubofthevillages.com/join-us',
    broadwayStars: 'https://operaclubofthevillages.com/join-us',
    carmen: 'https://operaclubofthevillages.com/join-us',
    togetherAgain:
      'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/',
    celebrateAmerica: 'https://operaclubofthevillages.com/join-us',
    broadwayBlockbusters:
      'https://www.thevillagesentertainment.com/buy-tickets/broadway-blockbusters/',
    fernando:
      'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/',
    GalaSharon: 'https://smartseat.thevillages.com/?itemnumber=33264#/',
    webber:
      'https://www.thevillagesentertainment.com/buy-tickets/an-intimate-evening-of-andrew-lloyd-webber/',
    // Add more ticket links as needed
  };

  mainShows: Show[] = [
    {
      title: 'Broadway Blockbusters',
      image: 'assets/images/BBRIntegrated.webp',
      description:
        'Feel the thrill of the Great White Way! Broadway Blockbusters features show-stopping hits from the most beloved musicals of all time—soaring ballads, toe-tapping numbers, and unforgettable melodies that have lit up the stage for decades. A night of pure theatrical magic!',
      date: 'Oct 29, 2025',
      venue: 'The Savannah Center',
      time: '4 PM & 7 PM',
      ticketKey: 'broadwayBlockbusters',
      buttonText: 'Buy Tickets',
      available: true,
    },
    {
      title: 'Catch a Rising Star (Prodigies: Stars of Tomorrow) ',
      image: 'assets/images/CRSProd.png',
      description:
        "Experience tomorrow's legends today! Catch a Rising Star showcases extraordinary young talents from The Juilliard School of Music in an unforgettable evening of artistry. Your attendance helps shape the future of music.",
      date: 'Oct 30, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '3 PM & 7 PM',
      ticketKey: 'risingStar',
      buttonText: 'Coming Soon',
      available: false,
    },
    {
      title: 'Christmas Spectacular',
      image: 'assets/images/CSWW.png',
      description:
        "Celebrate the joy of the season with our Christmas Spectacular! Join us for an enchanting evening of classic holiday favorites, from cherished carols to festive showstoppers—featuring the beautiful voices of the Saint Timothy's Choir and featured soloists. A heartwarming start to your Christmas celebrations!",
      date: 'Dec 18, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '3 PM & 7 PM',
      ticketKey: 'christmasSpectacular',
      buttonText: 'Coming Soon',
      available: false,
    },
  ];

  lesserShows: LesserShow[] = [
    {
      title: 'An Intimate Evening of Andrew LLoyd Webber',
      image: 'assets/images/AWRRRR1Square.png',
      description: '',
      date: 'Jan 09, 2026',
      venue: 'The Savaannah Center',
      ticketKey: 'webber',
      buttonText: 'Buy Tickets',
      available: true,
    },
    {
      title: 'Broadway Stars with Grant Norman',
      image: 'assets/images/grantPhantomSquare.png',
      description: '',
      date: 'Jan 20, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'broadwayStars',
      buttonText: 'Coming Soon',
      available: false,
    },

    {
      title: "Bizet's Carmen",
      image: 'assets/images/Carmen ArtworkSquare.png',
      description: '',
      date: 'Jan 30, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketKey: 'carmen',
      buttonText: 'Coming Soon',
      available: false,
    },

    {
      title: 'Change The World',
      image: 'assets/images/CW3 Square.png',
      description: '',
      date: 'Jan 22, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketKey: 'changeTheWorld',
      buttonText: 'Buy Tickets',
      available: true,
    },

    {
      title: 'Together Again',
      image: 'assets/images/fernando.webp',
      description: '',
      date: 'April 25, 2026',
      venue: 'Savannah Center',
      ticketKey: 'togetherAgain',
      buttonText: 'Coming Soon',
      available: false,
    },
    {
      title: 'Celebrate America',
      image: 'assets/images/CA1Square.png',
      description: '',
      date: 'May 21, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketKey: 'celebrateAmerica',
      buttonText: 'Coming Soon',
      available: false,
    },
  ];

  buyTickets(event: string) {
    const mainShow = this.mainShows.find((s) => s.ticketKey === event);
    const lesserShow = this.lesserShows.find((s) => s.ticketKey === event);

    if (mainShow) {
      this.handleMainShow(mainShow);
    } else if (lesserShow) {
      this.handleLesserShow(lesserShow);
    } else {
      // Log error for debugging but don't expose to user
      this.loggingService.error(`Show not found for ticket key: ${event}`);
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
      this.showTicketOptions(
        this.ticketLinks[show.ticketKey as keyof typeof this.ticketLinks],
        false // false for lesser shows
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
      "Tickets are coming soon, join Maestro's inner circle for deals and info about upcoming shows.";
    // Show the Maestro's Inner Circle modal instead of just a message
    this.showTicketOptionsBox = true;
    this.showMaestrosInnerCircleButton = true;
    this.currentTicketLink = ''; // No direct ticket link for unavailable shows
  }

  showMaestrosInnerCircleButton: boolean = false;

  private showTicketOptions(ticketLink: string, _isMainShow: boolean): void {
    this.currentTicketLink = ticketLink;
    this.showTicketOptionsBox = true;
    this.showMaestrosInnerCircleButton = true; // Always show the button
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
    } else {
      // For unavailable shows, just close the modal
      this.loggingService.log('No ticket link available for this show');
    }
    this.closeTicketOptionsBox();
  }

  closeTicketOptionsBox(): void {
    this.showTicketOptionsBox = false;
    this.showUnavailableBox = false; // Also close the unavailable message box
    this.currentTicketLink = '';
  }

  onShowButtonClick(show: ShowListShow) {
    // Try to match by title (or id if you add it)
    const mainShow = this.mainShows.find((s) => s.title === show.title);
    const lesserShow = this.lesserShows.find((s) => s.title === show.title);
    if (mainShow) {
      this.handleMainShow(mainShow);
    } else if (lesserShow) {
      this.handleLesserShow(lesserShow);
    }
  }
}
