import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Central Florida Lyric Opera';
  private cleanupFunctions: (() => void)[] = [];
  isVisible = false;
  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeObservers();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollEffect();
      this.setInitialState();
      this.setupVideoPlayback();
      this.setupWatermarkVisibility();
    }
  }

  private initializeObservers(): void {
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
            this.renderer.setProperty(boxTitle, 'textContent', title);
            this.renderer.setProperty(boxText, 'textContent', text);
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
          this.renderer.setStyle(floatingBox, 'display', 'none');
        } else if (floatingBox) {
          this.renderer.setStyle(floatingBox, 'display', 'block');
        }
      });
    }, observerOptions);

    if (ticketsSection) {
      ticketObserver.observe(ticketsSection);
    }
  }

  private setInitialState(): void {
    const boxTitle = document.getElementById('box-title');
    const boxText = document.getElementById('box-text');
    const floatingBox = document.getElementById('floating-box');

    if (boxTitle && boxText && floatingBox) {
      this.renderer.setProperty(
        boxTitle,
        'textContent',
        'Bill Doherty Requiem'
      );
      this.renderer.setProperty(
        boxText,
        'textContent',
        "American Premiere Concert, St. Timothy's Catholic Church, The Villages, FL"
      );
      this.renderer.setStyle(floatingBox, 'display', 'block');
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
          .then(() => {
            console.log('Video started playing');
          })
          .catch((error) => {
            console.error('Error attempting to play video:', error);
          });
      };

      playVideo();
      this.renderer.listen(document, 'click', playVideo);

      this.renderer.listen(videoElement, 'canplay', () => {
        console.log('Video can start playing');
      });

      this.renderer.listen(videoElement, 'playing', () => {
        console.log('Video is now playing');
      });
    } else {
      console.error('Video element not found');
    }
  }

  private setupScrollEffect(): void {
    const requiemSection = document.getElementById('requiem-section');
    const videoSection = document.getElementById('video-section');
    const revealSection = document.querySelector(
      '.reveal-on-scroll'
    ) as HTMLElement;
    const headerHeight = 60;
    const boxTitle = document.getElementById('box-title');
    const boxText = document.getElementById('box-text');
    const floatingBox = document.getElementById('floating-box');

    if (
      !requiemSection ||
      !videoSection ||
      !revealSection ||
      !boxTitle ||
      !boxText ||
      !floatingBox
    ) {
      console.error('Required elements not found');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullSectionHeight = viewportHeight - headerHeight;

      if (scrollPosition < 50) {
        this.renderer.setStyle(floatingBox, 'display', 'block');
        this.renderer.setProperty(
          boxTitle,
          'textContent',
          'The Best of Broadway'
        );
        this.renderer.setProperty(
          boxText,
          'textContent',
          'Step into the dazzling world of Broadway with a spectacular showcase of the greatest hits from the heart of the theater district. Join us for an unforgettable evening featuring show-stopping performances from beloved musicals such as The Phantom of the Opera, Les Misérables, Wicked, and more.'
        );
      }

      if (scrollPosition < fullSectionHeight) {
        const progress = scrollPosition / fullSectionHeight;
        this.renderer.setStyle(
          requiemSection,
          'transform',
          `translateY(-${progress * 100}%)`
        );
        this.renderer.setStyle(requiemSection, 'opacity', '1');

        if (progress < 0.8) {
          this.renderer.setProperty(
            boxTitle,
            'textContent',
            'The Best of Broadway'
          );
          this.renderer.setProperty(
            boxText,
            'textContent',
            'Step into the dazzling world of Broadway with a spectacular showcase of the greatest hits from the heart of the theater district. Join us for an unforgettable evening featuring show-stopping performances from beloved musicals such as The Phantom of the Opera, Les Misérables, Wicked, and more.'
          );
          this.renderer.setStyle(floatingBox, 'display', 'block');
        }
      } else {
        this.renderer.setStyle(
          requiemSection,
          'transform',
          'translateY(-100%)'
        );
        this.renderer.setStyle(requiemSection, 'opacity', '0');
      }

      if (
        scrollPosition >= fullSectionHeight * 0.8 &&
        scrollPosition < 2 * fullSectionHeight
      ) {
        this.renderer.setStyle(videoSection, 'position', 'fixed');
        this.renderer.setStyle(videoSection, 'top', `${headerHeight}px`);
        this.renderer.setStyle(videoSection, 'transform', 'translateY(0)');
        this.renderer.setStyle(videoSection, 'opacity', '1');

        this.renderer.setProperty(
          boxTitle,
          'textContent',
          'Central Florida Lyric Opera'
        );
        this.renderer.setProperty(
          boxText,
          'textContent',
          "Join Central Florida Lyric Opera's esteemed Resident Artist Program! Gain invaluable mentorship, top-notch training, and performance opportunities that will launch your career. Be a part of our vibrant artistic community and let your talent shine on stage."
        );
        this.renderer.setStyle(floatingBox, 'display', 'block');
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
        this.renderer.setStyle(revealSection, 'visibility', 'visible');

        if (progress > 0.5) {
          this.renderer.setStyle(floatingBox, 'display', 'none');
        }
      } else {
        this.renderer.setStyle(videoSection, 'opacity', '1');
        this.renderer.setStyle(revealSection, 'transform', 'translateY(20%)');
        this.renderer.setStyle(revealSection, 'opacity', '0');
        this.renderer.setStyle(revealSection, 'visibility', 'hidden');
      }
    };

    this.renderer.listen(window, 'scroll', handleScroll);
    this.cleanupFunctions.push(() => {
      this.renderer.destroy();
    });

    handleScroll();
  }

  private setupWatermarkVisibility(): void {
    const ticketsSection = document.getElementById('tickets-section');
    const body = document.body;

    if (ticketsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              body.classList.add('tickets-section-visible');
            } else {
              body.classList.remove('tickets-section-visible');
            }
          });
        },
        { threshold: 0.1 } // Adjust this value to change when the effect triggers
      );

      observer.observe(ticketsSection);
    }
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  buyTickets() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = '/buy-tickets';
    }
  }

  showCalendar(event: Event) {
    event.preventDefault();
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = '/calendar';
    }
  }

  ngOnDestroy(): void {
    this.cleanupFunctions.forEach((cleanup) => cleanup());
  }
}
