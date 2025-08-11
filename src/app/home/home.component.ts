import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { ShowListComponent, ShowListShow } from '../show-list.component';

// --- Interfaces ---
interface Show {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
  venue: string;
  time?: string;
  ticketLink: string;
  available: boolean;
  buttonText?: string;
  joinLink?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ShowListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('contentFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '300ms 100ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  // --- Component Properties ---
  isMobile: boolean = false;
  isBrowser: boolean = false;
  private resizeObserver: ResizeObserver | null = null;
  private scrollAnimationFrame: number | null = null;
  private readonly INNER_CIRCLE_JOIN_URL =
    'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw4jJ8dP3WENd40BxFaEBjFeuOZb4VcB2ymo1KHOVZ_kDZCR2fydYdtyE-O3BcBcTWjNgB2WN4z5Xp_g7b3YpfYm3eA3qBYpNsWzUSZgIb7_YeYdEzQE7O4I';

  // --- Show Data (Unchanged) ---
  mainShows: Show[] = [
    {
      id: 'movieMagic',
      title: 'Broadway Blockbusters',
      image: 'assets/images/BBRIntegrated.webp',
      description:
        'Feel the thrill of the Great White Way! Broadway Blockbusters features show-stopping hits from the most beloved musicals of all time—soaring ballads, toe-tapping numbers, and unforgettable melodies that have lit up the stage for decades. A night of pure theatrical magic!',
      date: 'Oct 29, 2025',
      venue: 'The Savannah Center',
      time: '4 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/broadway-blockbusters/',
      available: true,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'rising Star',
      title: 'Catch a Rising Star (Prodigies: Stars of Tomorrow) ',
      image: 'assets/images/CRSProd.png',
      description:
        "Experience tomorrow's legends today! Catch a Rising Star showcases extraordinary young talents from The Juilliard School of Music in an unforgettable evening of artistry. Your attendance helps shape the future of music.",
      date: 'Oct 9, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '4 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
      available: false,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'christmasTimothys',
      title: 'Christmas Spectacular',
      image: 'assets/images/CSWW.png',
      description:
        "Celebrate the joy of the season with our Christmas Spectacular! Join us for an enchanting evening of classic holiday favorites, from cherished carols to festive showstoppers—featuring the beautiful voices of the Saint Timothy's Choir and featured soloists. A heartwarming start to your Christmas celebrations!",
      date: 'Dec 11, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '4 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
      available: false,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
  ];
  lesserShows: Show[] = [
    {
      id: 'risingStar',
      title: 'Catch a Rising Star',
      image: 'assets/images/risingSquare.png',
      description:
        "Experience tomorrow's legends today! Catch a Rising Star showcases extraordinary young talents from The Juilliard School of Music and others in an unforgettable evening of artistry. Your attendance helps shape the future of music.",
      date: 'Oct 9, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '4 PM & 7 PM',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Broadway Blockbusters',
      title: 'Broadway Blockbusters',
      image: 'assets/images/BBRIntegratedSquare.webp',
      description:
        'You know them – you love them! Favorites from The Phantom of the Opera, Cats, Les Misérables, West Side Story, and many more. Starring Heather Ard, Michelle Struhar, Victoria Sexton, Andrew Struhar, Scotty Tomas, Justin Scarlat, Kaitlyn McMonigle, David Gehring, Sam Reynolds, and others perform solos and booming group numbers from everyone’s favorite Broadway Shows.  Maestro Bill Doherty accompanies magnificently on the piano. This intimate, elegant and family-friendly show is guaranteed to please ’cause everybody loves Broadway!',
      date: 'Oct 29, 2025',
      venue: 'The Savannah Center',
      time: '4 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/broadway-blockbusters/',
      available: true,
      buttonText: 'Buy Tickets',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'christmasTimothys',
      title: 'Christmas Spectacular',
      image: 'assets/images/CSsquare.png',
      description: '',
      date: 'Dec 11, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '4 PM & 7 PM',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'LW',
      title: 'An Intimate Evening of Andrew LLoyd Webber',
      image: 'assets/images/AWRRRR1Square.png',
      description:
        'Celebrate the legendary music of Andrew Lloyd Webber with Maestro Bill Doherty and the Central Florida Lyric Opera soloists and Orchestra on January 9th at the Savannah Center. Relish melodies from The Phantom of the Opera, Cats, Sunset Boulevard, Jesus Christ Superstar, and more! Starring Angie Rose, Miguel Salas, Scotty Tomas, Victoria Sexton, Justin Scarlat, David Gehring, Ashley Thunder, Kayla Tassone, and others.',
      date: 'Jan 09, 2026',
      venue: 'The Savannah Center',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/an-intimate-evening-of-andrew-lloyd-webber/',
      available: true,
      buttonText: 'Buy Tickets',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Broadway Stars',
      title: 'Broadway Stars with Grant Norman',
      image: 'assets/images/grantPhantomSquare.png',
      description: '',
      date: 'Jan 20, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'Carmen',
      title: "Bizet's Carmen",
      image: 'assets/images/Carmen ArtworkSquare.png',
      description: '',
      date: 'Jan 30, 2026',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM & 7 PM',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'CTW',
      title: 'Change The World',
      image: 'assets/images/CW3 Square.png',
      description:
        'Join us for the annual tradition of Change The World, with two performances featuring Maestro Bill Doherty and many other talented local artists as they sing songs of Inspiration, Love, and Hope for World Peace. Uplifting songs from this performance will include classic favorites and renditions of modern music meant to bring happiness to anyone who hears these talented musicians. Partial proceeds from this concert filled with good-will and joy will benefit the National Multiple Sclerosis Society. Don\'t miss the return of the concert that was called "A triumph of community, and a glorious example of how music can heal the soul".',
      date: 'March 13, 2026',
      time: '3 PM & 7 PM',
      venue: 'The Sharon Performing Arts Center',
      ticketLink:
        'https://www.thesharon.com/event.php?id=1133&title=Change-The-World',
      available: true,
      buttonText: 'Buy Tickets',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'MovieMagic',
      title: 'Movie Magic',
      image: 'assets/images/movieMagic.webp',
      description: '',
      date: 'April 15, 2026',
      venue: 'Savannah Center',
      time: '4 PM & 7 PM',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'America',
      title: 'Celebrate America',
      image: 'assets/images/CA1Square.png',
      description: '',
      date: 'May 21, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
  ];
  OCShows: Show[] = [
    {
      id: 'Curtain',
      title: 'Raise The Curtain (Opening Season Concert)',
      image: 'assets/images/curtain.webp',
      description:
        'Step back in time with the charming melodies of classic operas and operettas in a performance full of nostalgia and beautiful music presented by The Opera Club.',
      date: 'Sep 25, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'popera',
      title: 'Popera',
      image: 'assets/images/popera.webp',
      description: '',
      date: 'Oct 23, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'christmasWorld',
      title: 'Christmas Around the World',
      image: 'assets/images/Christmas-World (2).webp',
      description: '',
      date: 'Dec 14, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'Mozart',
      title: 'Mostly Mozart',
      image: 'assets/images/mozart.webp',
      description: '',
      date: 'Jan 22, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: '3Tenors',
      title: '3 Tenors Plus One',
      image: 'assets/images/soon.png',
      description: '',
      date: 'Feb 20, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'BSR',
      title: 'Back Stage Romance (Love Songs from Opera & Musical Theater)',
      image: 'assets/images/Romance.webp',
      description: '',
      date: 'Feb 26, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'French',
      title: 'La Vie En Rose (French Love Songs)',
      image: 'assets/images/french.png',
      description: '',
      date: 'Jan 30, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'Voices',
      title: 'Voices of Spring (Music of Operetta)',
      image: 'assets/images/voicesOfSpring.png',
      description: '',
      date: 'May 28, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
  ];

  // --- State Properties ---
  currentShow: Show | null = null;
  currentShowIndex: number = 0;
  showOverlay: boolean = false;
  overlayTransform: string = 'translateY(0)';
  overlayOpacity: number = 1;
  bannerContainerHeightVh: number = 100;
  showMessageBox: boolean = false;
  messageBoxText: string = '';
  showInnerCircleModal: boolean = false;
  currentTicketLink: string | null = null;
  currentJoinLink: string | null = null;

  get filteredLesserShows(): Show[] {
    return this.lesserShows.filter(
      (ls) => !this.mainShows.some((ms) => ms.title === ls.title)
    );
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.checkScreenSize();
      this.updateBannerContainerHeight();
      this.setupResizeObserver();

      if (!this.isMobile && this.mainShows.length > 0) {
        this.setupInitialBannerState();
        this.handleScroll();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.scrollAnimationFrame) {
      cancelAnimationFrame(this.scrollAnimationFrame);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!this.isBrowser || this.isMobile) return;

    if (this.scrollAnimationFrame) {
      cancelAnimationFrame(this.scrollAnimationFrame);
    }

    this.scrollAnimationFrame = requestAnimationFrame(() => {
      this.handleScroll();
    });
  }

  private setupResizeObserver(): void {
    if (this.isBrowser && 'ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        const wasMobile = this.isMobile;
        this.checkScreenSize();
        this.updateBannerContainerHeight();

        if (wasMobile !== this.isMobile) {
          if (!this.isMobile) {
            this.setupInitialBannerState();
            this.handleScroll();
          } else {
            this.showOverlay = false;
          }
        } else if (!this.isMobile) {
          this.handleScroll();
        }
      });

      this.resizeObserver.observe(document.body);
    }
  }

  private checkScreenSize(): void {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth <= 992;
    }
  }

  private updateBannerContainerHeight(): void {
    if (this.isBrowser && !this.isMobile) {
      this.bannerContainerHeightVh = this.mainShows.length * 100;
    } else {
      this.bannerContainerHeightVh = 100;
    }
  }

  private setupInitialBannerState(): void {
    if (!this.isBrowser || this.isMobile || this.mainShows.length === 0) return;

    const bannerSections =
      this.el.nativeElement.querySelectorAll('.banner-section');
    bannerSections.forEach((section: HTMLElement, index: number) => {
      const initialOpacity = index === 0 ? '1' : '0';
      this.renderer.setStyle(section, 'opacity', initialOpacity);
      this.renderer.setStyle(section, 'transform', 'translateY(0)');
      this.renderer.setStyle(
        section,
        'zIndex',
        `${this.mainShows.length - index}`
      );
    });

    this.currentShow = this.mainShows[0];
    this.currentShowIndex = 0;
    this.showOverlay = true;
    this.overlayOpacity = 1;
    this.overlayTransform = 'translateY(0)';
    this.cdRef.detectChanges();
  }

  private handleScroll(): void {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const numShows = this.mainShows.length;

    if (numShows === 0 || this.isMobile) return;

    const endOfBannerScroll = (numShows - 1) * vh;

    // Calculate which section we're in and progress within that section
    const currentSection = Math.floor(scrollY / vh);
    const sectionProgress = (scrollY % vh) / vh;

    // Text updates at 75% reveal
    let textUpdateIndex = currentSection;
    if (sectionProgress >= 0.75 && currentSection < numShows - 1) {
      textUpdateIndex = currentSection + 1;
    }

    // Clamp to valid range
    textUpdateIndex = Math.max(0, Math.min(numShows - 1, textUpdateIndex));

    // Update banner sections - images fade out when they go beyond 75% up
    const bannerSections =
      this.el.nativeElement.querySelectorAll('.banner-section');
    bannerSections.forEach((section: HTMLElement, index: number) => {
      let translateY = 0;
      let zIndex = numShows - index;
      let opacity = 0;

      if (index < currentSection) {
        // Sections above current - moved up and hidden
        translateY = -vh;
        opacity = 0;
      } else if (index === currentSection) {
        // Current section - moves up based on scroll progress
        translateY = -sectionProgress * vh;
        // Start fading out when section goes beyond 75% up
        if (sectionProgress > 0.75) {
          opacity = 1 - (sectionProgress - 0.75) / 0.25; // Fade over the last 25%
        } else {
          opacity = 1;
        }
        zIndex = numShows + 1;
      } else {
        // Sections below current - stay in place and visible
        translateY = 0;
        opacity = 1;
      }

      this.renderer.setStyle(
        section,
        'transform',
        `translateY(${translateY}px)`
      );
      this.renderer.setStyle(section, 'zIndex', `${zIndex}`);
      this.renderer.setStyle(section, 'opacity', `${opacity}`);
    });

    // Update overlay content with 75% threshold - prevent rapid changes
    if (textUpdateIndex !== this.currentShowIndex && !this.isMobile) {
      this.currentShowIndex = textUpdateIndex;
      this.currentShow = this.mainShows[this.currentShowIndex];
      this.cdRef.detectChanges();
    }

    // Handle overlay fade out - improved logic to prevent spazzing
    let currentOverlayOpacity = 1;

    // Only start fade when we're past the last section
    if (scrollY > endOfBannerScroll) {
      const fadeStart = endOfBannerScroll;
      const fadeEnd = endOfBannerScroll + vh * 0.5; // Fade over 50% of viewport height

      if (scrollY <= fadeEnd) {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        currentOverlayOpacity = Math.max(0, 1 - fadeProgress);
      } else {
        currentOverlayOpacity = 0;
      }
    } else {
      currentOverlayOpacity = 1;
    }

    // Determine overlay visibility with smoother threshold
    this.showOverlay = currentOverlayOpacity > 0.05;

    // Apply overlay styles - only opacity, no transform
    this.overlayOpacity = currentOverlayOpacity;
  }

  // --- Action Handlers ---
  scrollToShow(index: number): void {
    if (!this.isBrowser || index < 0 || index >= this.mainShows.length) return;
    const targetScrollY = index * window.innerHeight;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  }

  onShowButtonClick(show: ShowListShow) {
    this.handleTicketButtonClick(show as Show);
  }

  handleTicketButtonClick(show: Show | null): void {
    if (!show) return;

    // For Opera Club shows (Join Club button), go directly to the join link without popup
    if (show.buttonText === 'Join Club' && show.joinLink) {
      if (this.isBrowser) {
        window.open(show.joinLink, '_blank');
      }
      return;
    }

    const isTicketPurchase = show.available && show.buttonText !== 'Join Club';

    if (isTicketPurchase) {
      this.currentTicketLink = show.ticketLink;
      this.currentJoinLink = show.joinLink || this.INNER_CIRCLE_JOIN_URL;
      this.showInnerCircleModal = true;
      this.closeMessageBox();
    } else {
      // For unavailable shows, show the Maestro's Inner Circle modal instead of simple message
      this.currentTicketLink = null; // No direct ticket link for unavailable shows
      this.currentJoinLink = this.INNER_CIRCLE_JOIN_URL;
      this.showInnerCircleModal = true;
      this.closeMessageBox();
    }
  }

  closeInnerCircleModal(): void {
    this.showInnerCircleModal = false;
    this.currentTicketLink = null;
    this.currentJoinLink = null;
  }

  proceedWithAction(): void {
    const targetLink = this.currentTicketLink || this.currentJoinLink;
    if (this.isBrowser && targetLink) {
      window.open(targetLink, '_blank');
    }
    this.closeInnerCircleModal();
  }

  joinInnerCircle(): void {
    if (this.isBrowser) {
      window.open(this.INNER_CIRCLE_JOIN_URL, '_blank');
    }
    this.closeInnerCircleModal();
  }

  closeMessageBox(): void {
    this.showMessageBox = false;
  }

  showEmailSignup(): void {
    if (this.isBrowser) {
      window.open(
        'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw4jJ8dP3WENd40BxFaEBjFeuOZb4VcB2ymo1KHOVZ_kDZCR2fydYdtyE-O3BcBcTWjNgB2WN4z5Xp_g7b3YpfYm3eA3qBYpNsWzUSZgIb7_YeYdEzQE7O4I',
        '_blank'
      );
    }
  }

  donateViaPaypal(): void {
    if (this.isBrowser) {
      window.open('https://www.paypal.com/ncp/payment/4KVSTHRDKZGQA', '_blank');
    }
  }
}
