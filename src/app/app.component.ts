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
    const boxes = document.querySelectorAll('.banner, .full-screen-banners');
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
    this.setupScrollEffect();
  }

  private setupScrollEffect(): void {
    const requiemSection = document.getElementById('requiem-section');
    const videoSection = document.getElementById('video-section');
    const revealSection = document.querySelector(
      '.reveal-on-scroll'
    ) as HTMLElement;

    if (!requiemSection || !videoSection || !revealSection) {
      console.error('Required elements not found');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition < viewportHeight) {
        requiemSection.style.top = `-${scrollPosition}px`;
        videoSection.style.top = `-${scrollPosition}px`;
      } else {
        requiemSection.style.top = `-${viewportHeight}px`;
        videoSection.style.top = `-${viewportHeight}px`;
        revealSection.style.marginTop = `${viewportHeight * 2}px`; // Ensure the reveal section starts after the stacked sections
      }
    };

    window.addEventListener('scroll', handleScroll);
    this.cleanupFunctions.push(() => {
      window.removeEventListener('scroll', handleScroll);
    });
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
