import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  PLATFORM_ID,
  Inject,
  HostListener,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

interface Show {
  title: string;
  image: string;
  description: string;
  date: string;
  venue: string;
  time?: string;
  ticketKey: string;
  buttonText: string;
  link: string;
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
  link: string;
  available: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private cleanupFunctions: (() => void)[] = [];
  unavailableMessage: string = '';
  isMobile: boolean = false;
  clubMembershipMessage: string = '';
  showUnavailableBox: boolean = false;
  showClubMembershipBox: boolean = false;
  showTicketOptionsBox: boolean = false;
  currentTicketLink: string = '';
  currentYear: number = new Date().getFullYear();
  showScrollBox = true;

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
      link: 'https://tickets.thevillages.com/32397',
      available: true,
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
      link: 'https://www.thesharon.com/schedule.php',
      available: false,
    },
    {
      title: 'Voices OF The Night',
      image: 'assets/images/night2.webp',
      description: 'Experience an unforgettable performance',
      date: 'February 5, 2025',
      time: '7 PM',
      venue: 'Manor at Plantation Leesburg, FL',
      ticketKey: 'voicesOfTheNight',
      buttonText: 'Get Tickets',
      link: 'https://www.thesharon.com/schedule.php',
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
      link: 'https://thevillagesentertainment.com/event/three-tenors-plus-one/',
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
      link: 'https://www.thesharon.com/schedule.php',
      available: false,
    },
    {
      title: 'Hooray for Hollywood',
      image: 'assets/images/hollywood.webp',
      description:
        'Enjoy a night of classic and contemporary songs from the silver screen.',
      date: 'January 3rd, 2025',
      venue: 'Savannah Center',
      time: '4 PM and 7 PM',
      ticketKey: 'hurrayHollywood',
      buttonText: 'Get Tickets',
      link: 'https://tickets.thevillages.com/events',
      available: false,
    },
    {
      title: 'Join The Opera Club',
      image: 'assets/images/operaClub.webp',
      description:
        'Incredible performances every month by Bill Doherty and his talented singers.',
      date: 'Ongoing',
      venue: 'Laurel  Manor',
      time: '7 PM',
      ticketKey: 'operaClub',
      buttonText: 'Join Club',
      link: 'https://operaclubofthevillages.com/join-us',
      available: true,
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://operaclubofthevillages.com',
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://central-florida-lyric-opera.yapsody.com/event/index/819495?ref=ebtn',
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://operaclubofthevillages.com/join-us',
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
      link: 'https://operaclubofthevillages.com/join-us',
      available: false,
    },
  ];

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      this.showScrollBoxTimeout();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && !this.isMobile) {
      this.setupScrollEffect();
      this.setupVideoPlayback();
    }
  }

  private showScrollBoxTimeout(): void {
    setTimeout(() => {
      this.showScrollBox = false;
    }, 10000);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (window.scrollY > 200) {
      this.showScrollBox = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.setupScrollEffect();
      }
    }
  }

  private setupVideoPlayback(): void {
    const videoElement = document.querySelector(
      '.slide-video'
    ) as HTMLVideoElement;
    if (videoElement) {
      this.renderer.setProperty(videoElement, 'muted', true);
      this.renderer.setProperty(videoElement, 'loop', true);

      const playVideo = () => {
        videoElement
          .play()
          .then(() => console.log('Video started playing'))
          .catch((error) =>
            console.error('Error attempting to play video:', error)
          );
      };

      playVideo();
      this.renderer.listen(document, 'click', playVideo);
    } else {
      console.error('Video element not found');
    }
  }

  private setupScrollEffect(): void {
    if (this.isMobile) return;

    const requiemSection = document.getElementById('requiem-section');
    const videoSection = document.getElementById('video-section');
    const revealSection = document.querySelector(
      '.reveal-on-scroll'
    ) as HTMLElement;
    const headerHeight = 60;

    if (!requiemSection || !videoSection || !revealSection) {
      console.error('Required elements not found');
      return;
    }

    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullSectionHeight = viewportHeight - headerHeight;

      const scrollingDown = scrollPosition > lastScrollTop;
      lastScrollTop = scrollPosition;

      if (scrollPosition < fullSectionHeight) {
        const progress = scrollPosition / fullSectionHeight;
        this.renderer.setStyle(
          requiemSection,
          'transform',
          `translateY(-${progress * 100}%)`
        );
        this.renderer.setStyle(videoSection, 'opacity', '1');
      } else {
        this.renderer.setStyle(
          requiemSection,
          'transform',
          'translateY(-100%)'
        );
        this.renderer.setStyle(videoSection, 'opacity', '1');
      }

      if (scrollPosition >= fullSectionHeight) {
        const progress = Math.min(
          (scrollPosition - fullSectionHeight) / fullSectionHeight,
          1
        );
        this.renderer.setStyle(
          videoSection,
          'opacity',
          (1 - progress).toString()
        );
        this.renderer.setStyle(
          revealSection,
          'transform',
          `translateY(${(1 - progress) * 20}%)`
        );
        this.renderer.setStyle(revealSection, 'opacity', progress.toString());

        if (progress > 0 && scrollingDown) {
          this.renderer.setStyle(revealSection, 'visibility', 'visible');
        } else if (progress === 0 && !scrollingDown) {
          this.renderer.setStyle(revealSection, 'visibility', 'hidden');
        }
      } else {
        this.renderer.setStyle(revealSection, 'visibility', 'hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    this.cleanupFunctions.push(() =>
      window.removeEventListener('scroll', handleScroll)
    );

    handleScroll();
  }

  navigateToResidentArtists(): void {
    this.router.navigate(['/resident-artist']).then(
      (success) => console.log('Navigation result:', success),
      (error) => console.error('Navigation error:', error)
    );
  }

  applyNowClicked(): void {
    this.navigateToResidentArtists();
  }

  buyMainShowTicketsClicked(event: string, clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    const show = this.mainShows.find((s) => s.ticketKey === event);

    if (show) {
      if (show.buttonText === 'Join Club') {
        this.showClubMembershipMessage();
      } else if (show.available) {
        this.showTicketOptions(show.link);
      } else {
        this.showUnavailableMessage();
      }
    } else {
      console.error(`Show not found for ${event}`);
    }
  }

  buyAdditionalShowTicketsClicked(event: string, clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    const show = this.lesserShows.find((s) => s.ticketKey === event);

    if (show) {
      if (show.buttonText === 'Join Club') {
        this.showClubMembershipMessage();
      } else if (show.available) {
        window.open(show.link, '_blank');
      } else {
        this.showUnavailableMessage();
      }
    } else {
      console.error(`Show not found for ${event}`);
    }
  }

  private showTicketOptions(ticketLink: string): void {
    this.currentTicketLink = ticketLink;
    this.showTicketOptionsBox = true;
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

  private showUnavailableMessage(): void {
    this.unavailableMessage =
      'We apologize, tickets are not yet available for this performance.';
    this.showUnavailableBox = true;
    setTimeout(() => {
      this.unavailableMessage = '';
      this.showUnavailableBox = false;
    }, 3000);
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

  ngOnDestroy(): void {
    this.cleanupFunctions.forEach((cleanup) => cleanup());
  }
}
