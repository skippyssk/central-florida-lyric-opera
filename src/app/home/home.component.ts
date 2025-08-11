import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
// ShowListShow interface moved here since we removed the show-list component
export interface ShowListShow {
  title: string;
  date: string;
  time?: string;
  venue: string;
  description: string;
  image: string;
  available: boolean;
  buttonText?: string;
  ticketLink?: string;
}

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
  private resizeObserver: ResizeObserver | null = null;
  private scrollAnimationFrame: number | null = null;
  private readonly INNER_CIRCLE_JOIN_URL =
    'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw4jJ8dP3WENd40BxFaEBjFeuOZb4VcB2ymo1KHOVZ_kDZCR2fydYdtyE-O3BcBcTWjNgB2WN4z5Xp_g7b3YpfYm3eA3qBYpNsWzUSZgIb7_YeYdEzQE7O4I';

  // --- Show Data (Unchanged) ---
  mainShows: Show[] = [
    {
      id: 'paris',
      title: 'Trip to France',
      image: 'assets/images/paris.webp',
      description:
        'Experience the magic of Paris through music and performance. Join us for an unforgettable trip celebrating the romance, culture, and artistic spirit of the City of Light.',
      date: 'April 11, 2026- April 22, 2026',
      venue: 'Paris, France',
      time: '',
      ticketLink: '#',
      available: false,
      buttonText: 'Get Details',
      joinLink: this.INNER_CIRCLE_JOIN_URL,
    },
  ];
  lesserShows: Show[] = [
    {
      id: 'risingStar',
      title: 'Catch a Rising Star',
      image: 'assets/images/risingSquare.png',
      description:
        "Experience tomorrow's legends today! **Catch a Rising Star** showcases extraordinary young talents from **The Juilliard School of Music** and others in an unforgettable evening of artistry.\n\nYour attendance helps shape the future of music.",
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
      description: `
**You know them – you love them!**  
Favorites from *The Phantom of the Opera*, *Cats*, *Les Misérables*, *West Side Story*, and many more.  

**Starring:**  
Heather Ard, Michelle Struhar, Victoria Sexton, Andrew Struhar, Scotty Tomas, Justin Scarlat, Kaitlyn McMonigle, David Gehring, Sam Reynolds, and others — performing unforgettable solos and booming group numbers from everyone’s favorite Broadway shows.  

**Featuring:**  
Maestro Bill Doherty, accompanying magnificently on the piano.  

This intimate, elegant, and family-friendly show is **guaranteed to please** — ’cause everybody loves Broadway!
`,
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
      description: `
**Step into a world of holiday wonder** as the Central Florida Lyric Opera presents  
**Christmas Spectacular** — an unforgettable evening of music, joy, and festive cheer.  

Featuring beloved Christmas classics, soaring carols, and heartwarming melodies,  
this dazzling performance unites:  

• The **powerful voices** of our company  
• The **angelic harmonies** of the Saint Timothy’s Choir  
• And the **magic of the season**  

A celebration sure to leave you filled with the spirit of Christmas.
`,
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
      description: `
**Celebrate the legendary music of Andrew Lloyd Webber** with Maestro Bill Doherty  
and the Central Florida Lyric Opera Soloists and Orchestra — **January 9th at the Savannah Center**.  

Relish unforgettable melodies from:  
*The Phantom of the Opera*, *Cats*, *Sunset Boulevard*, *Jesus Christ Superstar*, and more!  

**Starring:**  
Angie Rose, Miguel Salas, Scotty Tomas, Victoria Sexton, Justin Scarlat, David Gehring,  
Ashley Thunder, Kayla Tassone, and others.  
`,
      date: 'Jan 09, 2026',
      time: '4 PM & 7 PM',
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
      description: `
**Join Master of Ceremonies Grant Norman** — best known for his portrayal of *The Phantom* in  
*The Phantom of the Opera* (Broadway) — as he takes us on a musical journey with fellow Broadway stars:  

• **Melissa Minyard** (*Les Misérables*)  
• **David Chernault** (*Annie*)  
• **Christina Sivrich** (*Grease*)  
• **Brian Minyard** (*Annie Get Your Gun*)  
• **Renee Lawless** (*Wicked* on Broadway, TV Star of *The Haves & the Have Nots*)  

They will share stories and perform selections from their most celebrated roles in some of the greatest Broadway musicals ever written.  

Expect:  
• **Iconic solos** that made them famous  
• **Show-stopping duets, trios, and ensembles**  
• Performances with the **St. Timothy Catholic Church Choir** and other professional soloists from the Central Florida Lyric Opera  

**Accompanied on the grand piano by Maestro Bill Doherty**, this powerful and charismatic show is sure to delight!
`,
      date: 'Feb 12, 2026',
      time: '4 PM & 7 PM',
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
      description: `
**Passion. Danger. Seduction.**  

Step into the world of *Carmen*, Bizet’s fiery masterpiece that has captivated audiences for generations.  

From the irresistible **Habanera** to the electrifying **Toreador Song**, every moment bursts with drama, romance, and unforgettable melody.  

Experience the thrill of opera at its most intoxicating — where **love and fate collide** in a story you’ll never forget.
`,
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
      description: `
**Join us for the annual tradition of *Change The World*** — with two performances featuring  
Maestro Bill Doherty and many other talented local artists, singing songs of **Inspiration, Love, and Hope** for **World Peace**.  

Enjoy uplifting music, from **classic favorites** to **modern renditions**, all meant to bring happiness to everyone who listens.  

Partial proceeds from this concert — filled with goodwill and joy — will benefit the **National Multiple Sclerosis Society**.  

Don’t miss the return of the concert once called:  
*"A triumph of community, and a glorious example of how music can heal the soul."*
`,
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
      description: `
**Step into the spotlight of Hollywood’s golden moments!**  

*Movie Magic* brings you the greatest songs from the silver screen, including beloved hits like  
**Somewhere Over the Rainbow**, **Pure Imagination**, and timeless favorites from *Disney* and *The Sound of Music*.  

Relive the magic of cinema through **unforgettable melodies performed live**.
`,
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
      description: `
**Celebrate America** is an evening of music and gratitude,  
honoring the men and women who have worn our nation’s uniform.  

Surrounded by stirring **patriotic anthems** and timeless **hymns of freedom**,  
we’ll salute the sacrifices of generations past while inspiring hope for the future.  

Join us, lift your voices, and let the **power of music** remind us all of what makes America worth celebrating.
`,
      date: 'July 2, 2026',
      time: '4 PM & 7 PM',
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
      description: '',
      date: 'Sep 25, 2025',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
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
      buttonText: 'Tickets Available Soon',
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
      available: false,
      buttonText: 'Tickets Available Soon',
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
      available: false,
      buttonText: 'Tickets Available Soon',
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
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'BSR',
      title: 'Queens',
      image: 'assets/images/queens.png',
      description: '',
      date: 'Feb 26, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
      joinLink: 'https://operaclubofthevillages.com/join-us',
    },
    {
      id: 'BSR',
      title: 'Back Stage Romance (Love Songs from Opera & Musical Theater)',
      image: 'assets/images/Romance.webp',
      description: '',
      date: 'Mar 26, 2026',
      venue: 'Laurel Manor',
      ticketLink: 'https://operaclubofthevillages.com/join-us',
      available: false,
      buttonText: 'Tickets Available Soon',
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
      available: false,
      buttonText: 'Tickets Available Soon',
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
      this.bannerContainerHeightVh = 100; // Single banner section
    } else {
      this.bannerContainerHeightVh = 100;
    }
  }

  private setupInitialBannerState(): void {
    if (!this.isBrowser || this.isMobile || this.mainShows.length === 0) return;

    // For single banner, just set up the initial state
    this.currentShow = this.mainShows[0];
    this.currentShowIndex = 0;
    this.showOverlay = true;
    this.overlayOpacity = 1;
    this.overlayTransform = 'translateY(0)';

    // Make the banner section visible
    if (this.isBrowser) {
      const bannerSection = document.querySelector(
        '.banner-section'
      ) as HTMLElement;
      if (bannerSection) {
        bannerSection.style.opacity = '1';
      }
    }

    this.cdRef.detectChanges();
  }

  private handleScroll(): void {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    if (this.isMobile) return;

    // For single banner, handle fade out when scrolling past
    const endOfBannerScroll = vh;

    // Handle overlay fade out - make it more gradual
    let currentOverlayOpacity = 1;

    // Start fade when we're 50% into the banner section (more gradual)
    const fadeStart = endOfBannerScroll * 0.5;
    const fadeEnd = endOfBannerScroll * 0.9; // Complete fade by 90% of banner

    if (scrollY > fadeStart) {
      if (scrollY <= fadeEnd) {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        currentOverlayOpacity = Math.max(0, 1 - fadeProgress);
      } else {
        currentOverlayOpacity = 0;
      }
    } else {
      currentOverlayOpacity = 1;
    }

    // Determine overlay visibility with stricter threshold
    this.showOverlay = currentOverlayOpacity > 0.1;

    // Apply overlay styles - only opacity, no transform
    this.overlayOpacity = currentOverlayOpacity;

    // Update pointer events and visibility based on opacity
    if (this.isBrowser) {
      const bannerSection = document.querySelector(
        '.banner-section'
      ) as HTMLElement;
      const overlayElement = document.querySelector(
        '.show-overlay'
      ) as HTMLElement;

      if (bannerSection) {
        bannerSection.style.pointerEvents =
          currentOverlayOpacity > 0.1 ? 'auto' : 'none';
        // Also fade the banner section itself, but more gradually
        bannerSection.style.opacity = Math.max(
          0.3,
          currentOverlayOpacity
        ).toString();
      }

      if (overlayElement) {
        overlayElement.style.pointerEvents =
          currentOverlayOpacity > 0.1 ? 'auto' : 'none';
        // Completely hide the overlay when not visible to prevent interference
        if (currentOverlayOpacity <= 0.1) {
          overlayElement.style.display = 'none';
        } else {
          overlayElement.style.display = 'flex';
        }
      }
    }
  }

  // --- Action Handlers ---
  scrollToShow(index: number): void {
    if (!this.isBrowser || index < 0 || index >= this.mainShows.length) return;
    const targetScrollY = index * window.innerHeight;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
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

  formatDescription(description: string): string {
    return description
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }
}
