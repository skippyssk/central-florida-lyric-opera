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

  // Basic properties
  isMobile: boolean = false;
  showScrollBox: boolean = true;

  // Ticket / membership logic
  unavailableMessage: string = '';
  showUnavailableBox: boolean = false;
  clubMembershipMessage: string = '';
  showClubMembershipBox: boolean = false;
  showTicketOptionsBox: boolean = false;
  currentTicketLink: string = '';
  currentYear: number = new Date().getFullYear();

  // Data for main shows (concerts) and lesser shows
  mainShows: Show[] = [
    {
      title: 'Broadway Stars with Grant Norman',
      image: 'assets/images/grant.webp',
      description:
        'Join Master of Ceremonies Grant Norman, best known for his portrayal of Phantom in Phantom of the Opera on Broadway, as he takes us on a musical journey through classic Broadway hits.',
      date: 'March 13, 2025',
      time: '4pm and 7pm',
      venue: "St Timothy's Catholic Church",
      ticketKey: 'broadwayStars',
      buttonText: 'Buy Tickets Now',
      link: 'https://central-florida-lyric-opera.yapsody.com/event/index/819495?ref=ebtn',
      available: true,
    },
    {
      title: 'Change the World 2',
      image: 'assets/images/Change2.webp',
      description:
        'The wait is over—Change The World is back! Celebrate this uplifting event with two extraordinary performances that inspire hope and unity.',
      date: 'April 4, 2025',
      venue: 'The Sharon Performing Arts Center',
      time: '3 PM and 7 PM',
      ticketKey: 'changeTheWorld',
      buttonText: 'Buy Tickets Now',
      link: 'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/',
      available: true,
    },
    {
      title: 'Bill Doherty & Fernando Varela - Together Again!',
      image: 'assets/images/fernando.webp',
      description:
        'Experience the extraordinary reunion of Maestro Bill Doherty and Fernando Varela—bridging classic opera with modern appeal—in a performance you won’t forget.',
      date: 'April 21, 2025',
      time: '4pm and 7pm',
      venue: 'Savannah Center',
      ticketKey: 'fernando',
      buttonText: 'Buy Tickets Now',
      link: 'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/',
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
      link: 'https://thevillagesentertainment.com/event/three-tenors-plus-one/',
      available: true,
    },
    {
      title: 'Love Notes from Broadway',
      image: 'assets/images/broadway.webp',
      description:
        'Celebrate love with selections from your favorite Broadway shows.',
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
        'Celebrate the romance and elegance of French repertoire in an evening of enchanting art songs and arias.',
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
        'Step back in time with the charming melodies of classic operettas in a performance full of nostalgia.',
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
        'Enjoy incredible performances every month by Maestro Bill Doherty and his talented singers. Become a member to experience it all!',
      date: 'Ongoing',
      venue: 'Laurel Manor',
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
      if (!this.isMobile) {
        this.setupScrollEffect();
      }
    }
  }

  ngAfterViewInit(): void {
    // The overlay updates via scroll events.
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (window.scrollY > 2200) {
      this.showScrollBox = false;
    }
  }

  private checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  private showScrollBoxTimeout(): void {
    setTimeout(() => {
      this.showScrollBox = false;
    }, 10000);
  }

  // --------------------------------------------------------------------
  // UPDATED SCROLL EFFECT: Overlay Content Updates at 70% Reveal
  // --------------------------------------------------------------------
  private setupScrollEffect(): void {
    if (this.isMobile) return;
    const show1 = document.getElementById('show1');
    const show2 = document.getElementById('show2');
    const show3 = document.getElementById('show3');
    const overlayBox = document.getElementById('fixedOverlay');
    const logo = document.querySelector('.fixed-logo'); // fixed semi‑transparent logo

    if (!show1 || !show2 || !show3 || !overlayBox) {
      console.error('One or more required elements were not found.');
      return;
    }

    const vh = window.innerHeight;
    const overlayHeight = 150; // as in your CSS
    // Default overlay top when not in Fernando’s section.
    const defaultTop = vh - overlayHeight - 40;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // --- Determine Active Section for Overlay Content ---
      // For section 1 (Grant): if scrollY is less than 0.7×vh, remain in section 1.
      // Once scrollY reaches 0.7×vh, update to section 2.
      // (Section 3 remains as before.)
      let activeSectionIndex: number;
      if (scrollY < 0.7 * vh) {
        activeSectionIndex = 1;
      } else if (scrollY < vh + 0.7 * vh) {
        activeSectionIndex = 2;
      } else {
        activeSectionIndex = 3;
      }

      // --- Image Sliding Effects ---
      // Section 1 (Grant)
      if (scrollY < vh) {
        const progress1 = scrollY / vh;
        // Using a 150% multiplier so the image slides up faster.
        this.renderer.setStyle(
          show1,
          'transform',
          `translateY(-${progress1 * 150}%)`
        );
      } else {
        this.renderer.setStyle(show1, 'transform', 'translateY(-100%)');
      }

      // Section 2 (Change the World)
      if (scrollY >= vh && scrollY < 2 * vh) {
        const progress2 = (scrollY - vh) / vh;
        this.renderer.setStyle(
          show2,
          'transform',
          `translateY(-${progress2 * 100}%)`
        );
      } else if (scrollY >= 2 * vh) {
        this.renderer.setStyle(show2, 'transform', 'translateY(-100%)');
      } else {
        this.renderer.setStyle(show2, 'transform', 'translateY(0)');
      }

      // Section 3 (Fernando)
      if (scrollY < 2 * vh) {
        // BEFORE Fernando’s section:
        // Ensure the Fernando image is fully visible.
        this.renderer.setStyle(show3, 'transform', 'translateY(0)');
        this.renderer.setStyle(show3, 'opacity', 1);
        // Keep the overlay locked to its default bottom position.
        this.renderer.setStyle(overlayBox, 'top', defaultTop + 'px');
        this.renderer.setStyle(overlayBox, 'opacity', 1);
        this.renderer.setStyle(overlayBox, 'visibility', 'visible');
        if (logo) {
          this.renderer.setStyle(logo, 'opacity', 1);
          this.renderer.setStyle(logo, 'visibility', 'visible');
        }
      } else if (scrollY >= 2 * vh && scrollY < 3 * vh) {
        // DURING Fernando’s section:
        const progress3 = (scrollY - 2 * vh) / vh;
        this.renderer.setStyle(
          show3,
          'transform',
          `translateY(-${progress3 * 100}%)`
        );
        // Keep the overlay locked to the bottom (do not change its "top")
        this.renderer.setStyle(overlayBox, 'top', defaultTop + 'px');

        // Fade-out logic: make the overlay fade out faster.
        // In this example, the fade starts at 20% progress and is complete at 40%.
        const fadeThreshold = 0.2;
        const fadeEnd = 0.4;
        let opacity = 1;
        if (progress3 >= fadeThreshold) {
          if (progress3 >= fadeEnd) {
            opacity = 0;
          } else {
            opacity =
              1 - (progress3 - fadeThreshold) / (fadeEnd - fadeThreshold);
          }
        }
        this.renderer.setStyle(overlayBox, 'opacity', opacity);
        this.renderer.setStyle(
          overlayBox,
          'visibility',
          opacity === 0 ? 'hidden' : 'visible'
        );
        if (logo) {
          this.renderer.setStyle(logo, 'opacity', opacity);
          this.renderer.setStyle(
            logo,
            'visibility',
            opacity === 0 ? 'hidden' : 'visible'
          );
        }
        // Optionally, fade out the Fernando image too.
        this.renderer.setStyle(show3, 'opacity', opacity);
      } else {
        // AFTER Fernando’s section:
        // Lock the image in its final translated state.
        this.renderer.setStyle(show3, 'transform', 'translateY(-100%)');
        // Keep the overlay locked at the bottom and fully faded out.
        this.renderer.setStyle(overlayBox, 'top', defaultTop + 'px');
        this.renderer.setStyle(overlayBox, 'opacity', 0);
        this.renderer.setStyle(overlayBox, 'visibility', 'hidden');
        if (logo) {
          this.renderer.setStyle(logo, 'opacity', 0);
          this.renderer.setStyle(logo, 'visibility', 'hidden');
        }
        this.renderer.setStyle(show3, 'opacity', 0);
      }

      // --- Update the Overlay Content Based on Active Section ---
      if (activeSectionIndex === 1) {
        this.updateOverlay(
          'Broadway Stars with Grant Norman',
          'March 13, 2025',
          '4pm and 7pm',
          "St Timothy's Catholic Church",
          'Join Master of Ceremonies Grant Norman, best known for his portrayal of Phantom in Phantom of the Opera on Broadway, as he takes us on a musical journey through classic Broadway hits.',
          'Buy Tickets Now',
          'https://central-florida-lyric-opera.yapsody.com/event/index/819495?ref=ebtn'
        );
      } else if (activeSectionIndex === 2) {
        this.updateOverlay(
          'Change the World 2',
          'April 4, 2025',
          '3 PM and 7 PM',
          'The Sharon Performing Arts Center',
          'The wait is over—Change The World is back! Celebrate this uplifting event with two extraordinary performances that inspire hope and unity.',
          'Buy Tickets Now',
          'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/'
        );
      } else if (activeSectionIndex === 3) {
        this.updateOverlay(
          'Bill Doherty & Fernando Varela - Together Again!',
          'April 21, 2025',
          '4pm and 7pm',
          'Savannah Center',
          'Experience the extraordinary reunion of Maestro Bill Doherty and Fernando Varela—bridging classic opera with modern appeal—in a performance you won’t forget.',
          'Buy Tickets Now',
          'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/'
        );
      }
      this.setActiveNavButton(activeSectionIndex);
    };

    window.addEventListener('scroll', handleScroll);
    this.cleanupFunctions.push(() =>
      window.removeEventListener('scroll', handleScroll)
    );
    // Initialize on load.
    handleScroll();
  }

  private updateOverlay(
    title: string,
    date: string,
    time: string,
    venue: string,
    description: string,
    buttonText: string,
    link: string
  ): void {
    const titleEl = document.getElementById('showTitle');
    const dateEl = document.getElementById('showDate');
    const timeEl = document.getElementById('showTime');
    const venueEl = document.getElementById('showVenue');
    const descEl = document.getElementById('showDescription');
    const buttonEl = document.getElementById('buyButton');

    if (titleEl) titleEl.textContent = title;
    if (dateEl) dateEl.textContent = date;
    if (timeEl) timeEl.textContent = time;
    if (venueEl) venueEl.textContent = venue;
    if (descEl) descEl.textContent = description;
    if (buttonEl) {
      buttonEl.textContent = buttonText;
      buttonEl.setAttribute('href', link);
    }
  }

  private setActiveNavButton(index: number): void {
    const navButtons = [
      document.getElementById('nav1'),
      document.getElementById('nav2'),
      document.getElementById('nav3'),
    ];
    navButtons.forEach((btn, idx) => {
      if (btn) {
        if (idx === index - 1) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });
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

  buyMainShowTicketsClicked(ticketKey: string, clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    const show = this.mainShows.find((s) => s.ticketKey === ticketKey);
    if (!show) {
      console.error(`Show not found for ${ticketKey}`);
      return;
    }
    if (show.buttonText === 'Join Club') {
      this.showClubMembershipMessage();
    } else if (show.available) {
      this.currentTicketLink = show.link;
      this.showTicketOptionsBox = true;
    } else {
      this.showUnavailableMessage();
    }
  }

  buyAdditionalShowTicketsClicked(
    ticketKey: string,
    clickEvent: MouseEvent
  ): void {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    const show = this.lesserShows.find((s) => s.ticketKey === ticketKey);
    if (!show) {
      console.error(`Show not found for ${ticketKey}`);
      return;
    }
    if (show.buttonText === 'Join Club') {
      this.showClubMembershipMessage();
    } else if (show.available) {
      window.open(show.link, '_blank');
    } else {
      this.showUnavailableMessage();
    }
  }

  private showTicketOptions(ticketLink: string): void {
    this.currentTicketLink = ticketLink;
    this.showTicketOptionsBox = true;
  }

  joinMaestrosInnerCircle(): void {
    const buyButton = document.getElementById('buyButton');
    if (buyButton) {
      const link = buyButton.getAttribute('href');
      this.currentTicketLink = link ? link : '';
    }
    this.showTicketOptionsBox = true;
  }

  joinMaestrosInnerCircleAction(): void {
    const constantContactUrl =
      'https://visitor.r20.constantcontact.com/manage/optin?v=00125N-g8Ws2O3EoqRaks8Jbl69VTDKito0H9u-dlQ4fw4jJ8dP3WENd40BxFaEBjFeuOZb4VcB2ymo1KHOVZ_kDZCR2fydYdtyE-O3BcBcTWjNgB2WN4z5Xp_g7b3YpfYm3eA3qBYpNsWzUSZgIb7_YeYdEzQE7O4I';
    window.open(constantContactUrl, '_blank');
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

  scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let offset = 0;
    let sectionIndex = 1;
    if (sectionId === 'show1') {
      offset = 0;
      sectionIndex = 1;
    } else if (sectionId === 'show2') {
      offset = window.innerHeight;
      sectionIndex = 2;
    } else if (sectionId === 'show3') {
      offset = window.innerHeight * 2;
      sectionIndex = 3;
    }
    window.scrollTo({ top: offset, behavior: 'smooth' });
    setTimeout(() => {
      if (sectionIndex === 1) {
        this.updateOverlay(
          'Broadway Stars with Grant Norman',
          'March 13, 2025',
          '4pm and 7pm',
          "St Timothy's Catholic Church",
          'Join Master of Ceremonies Grant Norman, best known for his portrayal of Phantom in Phantom of the Opera on Broadway, as he takes us on a musical journey through classic Broadway hits.',
          'Buy Tickets Now',
          'https://central-florida-lyric-opera.yapsody.com/event/index/819495?ref=ebtn'
        );
      } else if (sectionIndex === 2) {
        this.updateOverlay(
          'Change the World 2',
          'April 4, 2025',
          '3 PM and 7 PM',
          'The Sharon Performing Arts Center',
          'The wait is over—Change The World is back! Celebrate this uplifting event with two extraordinary performances that inspire hope and unity.',
          'Buy Tickets Now',
          'https://www.thevillagesentertainment.com/buy-tickets/change-the-world-2/'
        );
      } else {
        this.updateOverlay(
          'Bill Doherty & Fernando Varela - Together Again!',
          'April 21, 2025',
          '4pm and 7pm',
          'Savannah Center',
          'Experience the extraordinary reunion of Maestro Bill Doherty and Fernando Varela—bridging classic opera with modern appeal—in a performance you won’t forget.',
          'Buy Tickets Now',
          'https://www.thevillagesentertainment.com/buy-tickets/together-again-bill-doherty-fernando-varela/'
        );
      }
      this.setActiveNavButton(sectionIndex);
    }, 500);
  }

  ngOnDestroy(): void {
    this.cleanupFunctions.forEach((cleanup) => cleanup());
  }
}
