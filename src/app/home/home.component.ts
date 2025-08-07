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
      id: 'movieMagic',
      title: 'Movie Magic',
      image: 'assets/images/MM.png',
      description:
        'Celebrate America is an evening of music and gratitude honoring the men and women who have worn our nation’s uniform. Surrounded by stirring patriotic anthems and timeless hymns of freedom, we’ll salute the sacrifices of generations past while inspiring hope for the future. Join us, lift your voices, and let the power of music remind us all of what makes America worth celebrating.',
      date: 'May 22, 2025',
      venue: 'The Savannah Center',
      time: '3 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
      available: false,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'rising Star',
      title: 'Catch a Rising Star (Prodigies: Stars of Tomorrow) ',
      image: 'assets/images/CRSProd.png',
      description:
        'Celebrate America is an evening of music and gratitude honoring the men and women who have worn our nation’s uniform. Surrounded by stirring patriotic anthems and timeless hymns of freedom, we’ll salute the sacrifices of generations past while inspiring hope for the future. Join us, lift your voices, and let the power of music remind us all of what makes America worth celebrating.',
      date: 'April 4, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '3 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
      available: false,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'christmasTimothys',
      title: 'Christmas Spectacular',
      image: 'assets/images/CSWide.png',
      description:
        'Celebrate America is an evening of music and gratitude honoring the men and women who have worn our nation’s uniform. Surrounded by stirring patriotic anthems and timeless hymns of freedom, we’ll salute the sacrifices of generations past while inspiring hope for the future. Join us, lift your voices, and let the power of music remind us all of what makes America worth celebrating.',
      date: 'April 4, 2025',
      venue: 'St. Timothys Catholic Church',
      time: '3 PM & 7 PM',
      ticketLink:
        'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
      available: false,
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
  ];
  lesserShows: Show[] = [
    {
      id: 'movieMagic',
      title: 'Movie Magic',
      image: 'assets/images/movieMagic.webp',
      description: '',
      date: 'Oct 09, 2025',
      venue: 'The Savannah Center',
      ticketLink: '',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'risingStar',
      title: 'Catch a Rising Star',
      image: 'assets/images/risingSquare.png',
      description: '',
      date: 'Oct 30, 2025',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'christmasTimothys',
      title: 'Christmas Spectacular',
      image: 'assets/images/christmasSpectacular.webp',
      description: 'TBD.',
      date: 'Dec 18, 2025',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'LW',
      title: 'An Intimate Evening of Andrew LLoyd Webber',
      image: 'assets/images/AWRRRR1Square.png',
      description: 'TBD.',
      date: 'Jan 09, 2026',
      venue: 'The Savaannah Center',
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
      description: 'TBD.',
      date: 'Jan 20, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'Carmen',
      title: "Bizet's Carmen",
      image: 'assets/images/Carmen ArtworkSquare.png',
      description: 'TBD.',
      date: 'Jan 30, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'CTW',
      title: 'Change The World',
      image: 'assets/images/CW3 Square.png',
      description: 'TBD.',
      date: 'Jan 22, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },

    {
      id: 'Fernando',
      title: 'Together Again',
      image: 'assets/images/fernando.webp',
      description: 'TBD.',
      date: 'April 25, 2026',
      venue: 'Savannah Center',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'America',
      title: 'Celebrate America',
      image: 'assets/images/CA1Square.png',
      description: 'TBD.',
      date: 'May 21, 2026',
      venue: 'St. Timothys Catholic Church',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Coming Soon',
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
      available: false,
      buttonText: 'Club Members Only',
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
      available: false,
      buttonText: 'Club Members Only',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'christmasWorld',
      title: 'Christmas Around the World',
      image: 'assets/images/Christmas-World (2).webp',
      description: 'TBD.',
      date: 'Dec 14, 2025',
      venue: 'Laurel Manor',
      ticketLink: '',
      available: false,
      buttonText: 'Club Members Only',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Mozart',
      title: 'Mostly Mozart',
      image: 'assets/images/mozart.webp',
      description: 'TBD.',
      date: 'Jan 22, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Club Members Only',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: '3Tenors',
      title: '3 Tenors Plus One',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Feb 20, 2026',
      venue: 'The Sharon Performing Arts Center',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Club Members Only',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'BSR',
      title: 'Back Stage Romance (Love Songs from Opera & Musical Theater)',
      image: 'assets/images/Romance.webp',
      description: 'TBD.',
      date: 'Feb 26, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Club Members Only',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'French',
      title: 'La Vie En Rose (French Love Songs)',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'Jan 30, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Club Members Only',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
    {
      id: 'Voices',
      title: 'Voices of Spring (Music of Operetta)',
      image: 'assets/images/soon.png',
      description: 'TBD.',
      date: 'May 28, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Club Members Only',
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
