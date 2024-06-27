import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Central Florida Lyric Opera';
  private cleanupFunctions: (() => void)[] = [];
  isVisible = false;
  isMenuOpen = false;

  ngOnInit(): void {
    const boxes = document.querySelectorAll('.banner');
    const boxTitle = document.getElementById('box-title');
    const boxText = document.getElementById('box-text');
    const floatingBox = document.getElementById('floating-box');
    const ticketsSection = document.getElementById('tickets-section');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const title = entry.target.getAttribute('data-title');
          const text = entry.target.getAttribute('data-text');
          if (boxTitle && boxText) {
            boxTitle.textContent = title;
            boxText.textContent = text;
          }
        }
      });
    }, observerOptions);

    boxes.forEach((box) => {
      observer.observe(box);
    });

    const ticketObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && floatingBox) {
          floatingBox.style.display = 'none';
        } else if (floatingBox) {
          floatingBox.style.display = 'block';
        }
      });
    }, observerOptions);

    if (ticketsSection) {
      ticketObserver.observe(ticketsSection);
    }
  }

  ngAfterViewInit(): void {
    this.setupScrollFadeEffect();
  }

  private setupScrollFadeEffect(): void {
    const bannerContainer = document.querySelector(
      '.full-screen-banners'
    ) as HTMLElement;
    const secondBanner = document.querySelector(
      '.banner:nth-child(2)'
    ) as HTMLElement;
    const ticketsSection = document.querySelector(
      '#tickets-section'
    ) as HTMLElement;

    if (!bannerContainer || !secondBanner || !ticketsSection) {
      console.error('Required elements not found');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const secondBannerMiddle =
        secondBanner.offsetTop + secondBanner.offsetHeight / 2;
      const ticketsSectionTop = ticketsSection.offsetTop;

      // Start fading from the middle of the second banner
      const fadeStartPosition = secondBannerMiddle;
      // End fading at the top of the tickets section
      const fadeEndPosition = ticketsSectionTop;

      if (
        scrollPosition >= fadeStartPosition &&
        scrollPosition <= fadeEndPosition
      ) {
        const fadeDistance = fadeEndPosition - fadeStartPosition;
        const rawOpacity =
          1 - (scrollPosition - fadeStartPosition) / fadeDistance;

        // Apply smoothstep function for a more gradual fade
        const smoothOpacity = this.smoothstep(0, 1, rawOpacity);

        bannerContainer.style.opacity = smoothOpacity.toString();
      } else if (scrollPosition < fadeStartPosition) {
        bannerContainer.style.opacity = '1';
      } else {
        bannerContainer.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    this.cleanupFunctions.push(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  }

  // Smoothstep function for a more gradual transition
  private smoothstep(min: number, max: number, value: number): number {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  buyTickets() {
    window.location.href = '/buy-tickets'; // Update this URL to the actual tickets page
  }

  showCalendar(event: Event) {
    event.preventDefault();
    // Navigate to the calendar page or open a calendar modal
    window.location.href = '/calendar'; // Update this URL to the actual calendar page
  }

  ngOnDestroy(): void {
    this.cleanupFunctions.forEach((cleanup) => cleanup());
  }
}
