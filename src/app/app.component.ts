import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Central Florida Lyric Opera';
  isMenuOpen = false;
  isMobile = false;
  isBrowser = false;
  private routerSubscription: Subscription | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
      this.setupResizeObserver();
      this.setupRouterEvents();
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  private checkScreenSize(): void {
    if (this.isBrowser) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  private setupResizeObserver(): void {
    if (this.isBrowser && 'ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkScreenSize();
      });
      this.resizeObserver.observe(document.body);
    }
  }

  private setupRouterEvents(): void {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
        // Close menu on navigation
        this.isMenuOpen = false;
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isBrowser) {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }

  navigateTo(route: string) {
    this.isMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
    this.router.navigateByUrl(route);
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.menu') as HTMLElement;
    const menuButton = document.querySelector('.menu-button') as HTMLElement;
    
    if (this.isMenuOpen && menu && menuButton) {
      if (!menu.contains(target) && !menuButton.contains(target)) {
        this.isMenuOpen = false;
        if (this.isBrowser) {
          document.body.style.overflow = '';
        }
      }
    }
  }

  // Close menu on escape key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      if (this.isBrowser) {
        document.body.style.overflow = '';
      }
    }
  }
}
