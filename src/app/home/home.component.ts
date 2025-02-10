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
      title: 'Broadway Stars with Grant Norman',
      image: 'assets/images/grant.webp',
      description:
        'Join Master of Ceremonies Grant Norman, (best known for his portrayal of Phantom in Phantom of the Opera (Broadway) as he takes us on a musical journey along with fellow Broadway stars Melissa Minyard (LES MIS), David Chernault (ANNIE), Christina Sivrich (GREASE), Brian Minyard (ANNIE GET YOUR GUN), Renee Lawless (WICKED on Broadway and TV Star of “The Have & Have Nots") as they talk and sing us through their famed roles in some of the greatest Broadway musicals ever written. Each of these dynamic performers will bring to life their most famous songs and characters - right before your very eyes. In addition, they will perform other famous Broadway duets, trios and ensembles along with the St Timothy Catholic Church Choir and other professional soloists from the Central Florida Lyric Opera. This powerful and charismatic show is sure to delight!  Accompanied on the grand piano by Maestro Bill Doherty.',
      date: 'March 13, 2025',
      time: '4pm and 7pm',
      venue: "St Timothy's Catholic Church",
      ticketKey: 'broadwayStars',
      buttonText: 'Get Tickets',
      link: 'https://central-florida-lyric-opera.yapsody.com/event/index/819495?ref=ebtn',
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
      link: 'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
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
      link: 'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/',
      available: true,
    },
  ];

  lesserShows: LesserShow[] = [
    {
      title: 'Three Tenors Plus One',
      image: 'assets/images/3T1.webp',
      description:
        'Experience a spectacular evening of music in support of the Harold S. Schwartz Music Scholarship. ',
      date: 'February 21, 2025',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM and 7 PM',
      ticketKey: 'threeTenors',
      buttonText: 'Get Tickets',
      link: 'https://thevillagesentertainment.com/event/three-tenors-plus-one/',
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
      title: 'Springtime in Paris',
      image: 'assets/images/spring4.webp',
      description:
        'Celebrate the romance and elegance of the French repertoire in an evening of enchanting art songs and arias!',
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
    {
      title: 'Join The Opera Club',
      image: 'assets/images/operaClub.webp',
      description:
        'Incredible performances every month by Maestro Bill Doherty and his talented singers.',
      date: 'Ongoing',
      venue: 'Laurel  Manor',
      time: '7 PM',
      ticketKey: 'operaClub',
      buttonText: 'Join Club',
      link: 'https://operaclubofthevillages.com/join-us',
      available: true,
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
    if (window.scrollY > 2200) {
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
