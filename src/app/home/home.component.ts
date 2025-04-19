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
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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
  imports: [CommonModule],
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
  private resizeTimeout: any;
  private scrollTimeout: any;
  private lastScrollY: number = 0;
  private readonly INNER_CIRCLE_JOIN_URL =
    'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw4jJ8dP3WENd40BxFaEBjFeuOZb4VcB2ymo1KHOVZ_kDZCR2fydYdtyE-O3BcBcTWjNgB2WN4z5Xp_g7b3YpfYm3eA3qBYpNsWzUSZgIb7_YeYdEzQE7O4I';

  // --- Show Data (Unchanged) ---
  mainShows: Show[] = [
    {
      id: 'doherty-varela',
      title: 'Bill Doherty & Fernando Varela',
      image: 'assets/images/fernando.webp',
      description:
        'Experience the extraordinary reunion of Maestro Bill Doherty and Fernando Varela—bridging classic opera with modern appeal—in a performance you won’t forget. Two shows only!',
      date: 'April 21, 2025',
      venue: 'Savannah Center',
      time: '7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/',
      available: true,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'change-the-world-2',
      title: 'Celebrate America',
      image: 'assets/images/Change2.webp',
      description:
        'An uplifting event filled with music and community, featuring Maestro Bill Doherty and talented local artists delivering songs of Inspiration, Love, and Hope, spreading a message of peace across the globe. A portion of proceeds supports the National Multiple Sclerosis Society.',
      date: 'April 4, 2025',
      venue: 'The Sharon PAC',
      time: '3 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
      available: true,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
  ];
  lesserShows: Show[] = [
    {
      id: 'golden-days',
      title: 'Golden Days: Music of Operetta',
      image: 'assets/images/operetta.webp',
      description:
        'Step back in time with the charming melodies of classic operettas in a performance full of nostalgia and beautiful music presented by The Opera Club.',
      date: 'May 22, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Club Members Only',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'gala',
      title: 'The Sharon: Inaugural Gala',
      image: 'assets/images/sharon.jpg',
      description:
        'A spectacular night celebrating the grand opening of The Sharon Performing Arts Center with star-studded performances and unforgettable moments.',
      date: 'October 10, 2025',
      venue: 'The Sharon PAC',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/sharon-inaugural-gala/',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'opera-club',
      title: 'Join The Opera Club',
      image: 'assets/images/operaClubI.webp',
      description:
        'Enjoy incredible performances every month by Maestro Bill Doherty and his talented singers. Become a member to experience it all!',
      date: 'Ongoing',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: true,
      buttonText: 'Join Club',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'Sept',
      title: 'September Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Sept 25, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Oct Sav',
      title: 'October Savannah Center Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Oct 9, 2025',
      venue: 'Savannah Center',
      ticketLink: '',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Oct',
      title: 'October Opera Club show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Oct 23, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'risingStar',
      title: 'Catch a Rising Star',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Oct 30, 2025',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Nov',
      title: 'November Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Nov 20, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'DEC',
      title: 'Opera Club Christmas Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Dec 7, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Christmas',
      title: 'St. Timothys Christmas Concert',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Dec 18, 2025',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Jan Savanah',
      title: 'January Savannah Center Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 9, 2026',
      venue: 'Savannah Center',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Grant',
      title: 'Grant Norman Broadway Stars',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 20, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Jan',
      title: 'January Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 22, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Opera',
      title: 'January Opera',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 30, 2026',
      venue: 'Sharon P.A.C.',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: '3Tenors',
      title: '3 Tenors Plus One',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Feb 20, 2026',
      venue: 'Sharon P.A.C.',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Feb',
      title: 'February Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Feb 26, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'March Sharon',
      title: 'March Sharon Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'March 13, 2026',
      venue: 'Sharon P.A.C.',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'March',
      title: 'March Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'March 26, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'April Savannah',
      title: 'April Savannah Center Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'April 15, 2026',
      venue: 'Savannah Center',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'April',
      title: 'April Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'April 23, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'America',
      title: 'Celebrate America',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'May 21, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'May',
      title: 'May Opera Club Show',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'May 28, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
  ];

  // --- State Properties (Unchanged) ---
  currentShow: Show | null = null;
  currentShowIndex: number = 0;
  showOverlay: boolean = false;
  overlayTransform: string = 'translateY(0)';
  overlayOpacity: number = 1;
  bannerContainerHeightVh: number = 100;
  overlayContentVisible: boolean = true;
  showMessageBox: boolean = false;
  messageBoxText: string = '';
  showInnerCircleModal: boolean = false;
  currentTicketLink: string | null = null;
  currentJoinLink: string | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // ngOnInit, ngOnDestroy, Event Listeners, checkScreenSize, updateBannerContainerHeight, setupInitialBannerState
  // remain the same as v6
  ngOnInit(): void {
    if (this.isBrowser) {
      this.checkScreenSize();
      this.updateBannerContainerHeight();
      if (!this.isMobile && this.mainShows.length > 0) {
        this.setupInitialBannerState();
        requestAnimationFrame(() => this.handleScroll());
      }
      this.lastScrollY = window.scrollY;
    }
  }
  ngOnDestroy(): void {
    clearTimeout(this.resizeTimeout);
    clearTimeout(this.scrollTimeout);
  }
  @HostListener('window:scroll', ['$event']) onWindowScroll(
    event: Event
  ): void {
    if (!this.isBrowser || this.isMobile) return;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      requestAnimationFrame(() => this.handleScroll());
    }, 0);
  }
  @HostListener('window:resize', ['$event']) onWindowResize(
    event: Event
  ): void {
    if (!this.isBrowser) return;
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      const wasMobile = this.isMobile;
      this.checkScreenSize();
      this.updateBannerContainerHeight();
      if (wasMobile !== this.isMobile) {
        if (!this.isMobile) {
          this.setupInitialBannerState();
          requestAnimationFrame(() => this.handleScroll());
        } else {
          this.showOverlay = false;
        }
      } else if (!this.isMobile) {
        requestAnimationFrame(() => this.handleScroll());
      }
    }, 200);
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
    this.overlayContentVisible = true;
    this.overlayOpacity = 1;
    this.overlayTransform = 'translateY(0)';
    this.cdRef.detectChanges();
  }

  private handleScroll(): void {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const numShows = this.mainShows.length;
    if (numShows === 0 || this.isMobile) return;

    const totalBannerScrollHeight = vh * numShows; // Total scrollable height for banner area

    let activeIndex = Math.floor(scrollY / vh);
    activeIndex = Math.max(0, Math.min(numShows - 1, activeIndex));

    // --- Update Banner Sections ---
    // Logic remains the same as v6 - ensures section below is visible
    const bannerSections =
      this.el.nativeElement.querySelectorAll('.banner-section');
    bannerSections.forEach((section: HTMLElement, index: number) => {
      let translateY = 0;
      let zIndex = numShows - index;
      let opacity = 0;
      const scrollStartForSection = index * vh;
      const progress = Math.max(
        0,
        Math.min(1, (scrollY - scrollStartForSection) / vh)
      );
      if (index < activeIndex) {
        translateY = -vh;
        opacity = 0;
      } else if (index === activeIndex) {
        translateY = -progress * vh;
        opacity = 1;
        zIndex = numShows + 1;
      } else {
        translateY = 0;
        opacity = 1;
      } // Keep sections below visible

      this.renderer.setStyle(
        section,
        'transform',
        `translateY(${translateY}px)`
      );
      this.renderer.setStyle(section, 'zIndex', `${zIndex}`);
      // Opacity for last section handled in fade logic below
      if (index !== numShows - 1) {
        this.renderer.setStyle(section, 'opacity', `${opacity}`);
      }
    });

    // --- Update Overlay Content ---
    // Unchanged
    if (activeIndex !== this.currentShowIndex && !this.isMobile) {
      this.overlayContentVisible = false;
      this.cdRef.detectChanges();
      this.currentShowIndex = activeIndex;
      this.currentShow = this.mainShows[this.currentShowIndex];
      setTimeout(() => {
        this.overlayContentVisible = true;
        this.cdRef.detectChanges();
      }, 150);
    }

    // --- Handle Overlay Position and Fade ---
    const endOfBannerScroll = (numShows - 1) * vh;
    // *** Adjusted end fade threshold slightly earlier ***
    const startOverlayFadeScroll = endOfBannerScroll + vh * 0.5; // Start fade halfway
    const endOverlayFadeScroll = endOfBannerScroll + vh * 0.9; // End fade when 10% left

    let currentOverlayTransformY = 0;
    let currentOverlayOpacity = 1;
    let lastBannerOpacity =
      activeIndex === numShows - 1 || activeIndex === numShows - 2 ? 1 : 0;
    this.showOverlay = true; // Assume true, override below

    // Calculate fade out first based on range
    if (scrollY >= startOverlayFadeScroll) {
      const fadeProgress = Math.max(
        0,
        Math.min(
          1,
          (scrollY - startOverlayFadeScroll) /
            (endOverlayFadeScroll - startOverlayFadeScroll)
        )
      );
      currentOverlayOpacity = 1 - fadeProgress;
      lastBannerOpacity = 1 - fadeProgress;
    }

    // Calculate overlay transform only when in last section
    if (scrollY >= endOfBannerScroll) {
      const scrollPastEndOfBanner = scrollY - endOfBannerScroll;
      currentOverlayTransformY = -scrollPastEndOfBanner;
    } else {
      currentOverlayTransformY = 0;
      // Ensure opacity is 1 before fade starts
      currentOverlayOpacity = 1;
      if (activeIndex === numShows - 1) {
        // If last section is active before fade starts
        lastBannerOpacity = 1;
      }
    }

    // *** Force hide if scrolled completely past the banner container ***
    // This overrides the fade calculation if scrollY is beyond the banner area
    if (scrollY >= totalBannerScrollHeight - 10) {
      // Use a small buffer
      currentOverlayOpacity = 0;
      lastBannerOpacity = 0;
    }

    // Determine final overlay visibility
    this.showOverlay = currentOverlayOpacity > 0.01; // Hide if effectively transparent

    // Apply overlay styles
    this.overlayTransform = `translateY(${currentOverlayTransformY}px)`;
    this.overlayOpacity = currentOverlayOpacity;

    // Apply final opacity to the last banner section
    const lastBannerSection = bannerSections[numShows - 1];
    if (lastBannerSection) {
      this.renderer.setStyle(
        lastBannerSection,
        'opacity',
        `${lastBannerOpacity}`
      );
    }

    this.lastScrollY = scrollY;
  }

  // --- Action Handlers ---
  // Unchanged from v6
  scrollToShow(index: number): void {
    if (!this.isBrowser || index < 0 || index >= this.mainShows.length) return;
    const targetScrollY = index * window.innerHeight;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  }
  handleTicketButtonClick(show: Show | null): void {
    if (!show) return;
    const isTicketPurchase = show.available && show.buttonText !== 'Join Club';
    const isJoinClubAction = show.buttonText === 'Join Club' && !!show.joinLink;
    if (isTicketPurchase || isJoinClubAction) {
      this.currentTicketLink = show.ticketLink;
      this.currentJoinLink = show.joinLink || this.INNER_CIRCLE_JOIN_URL;
      this.showInnerCircleModal = true;
      this.closeMessageBox();
    } else if (show.buttonText === 'Club Members Only' && show.joinLink) {
      this.messageBoxText = `Tickets for "${show.title}" are available exclusively to Opera Club members.`;
      this.showMessageBox = true;
      this.closeInnerCircleModal();
    } else {
      this.messageBoxText = `Sorry, the requested action for "${show.title}" is not currently available.`;
      if (show.buttonText === 'Coming Soon') {
        this.messageBoxText = `"${show.title}" is coming soon! Please check back later or join our email list for updates.`;
      }
      this.showMessageBox = true;
      this.closeInnerCircleModal();
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
}
