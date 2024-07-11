import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Central Florida Lyric Opera';
  isMenuOpen = false;

  constructor(public dialog: MatDialog) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(route: string) {
    // Navigation logic here
    this.isMenuOpen = false;
  }

  showCalendar(event: Event) {
    event.preventDefault();
    this.dialog.open(CalendarDialog, {
      width: '400px',
      height: '450px',
      position: { top: '80px' },
      panelClass: 'calendar-dialog-panel',
      backdropClass: 'calendar-dialog-backdrop',
      hasBackdrop: true,
    });
  }
}

@Component({
  selector: 'calendar-dialog',
  template: `
    <h2 mat-dialog-title style="color: #b8995f;">Show Dates</h2>
    <mat-dialog-content>
      <mat-calendar [dateClass]="dateClass"></mat-calendar>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close style="color: #b8995f;">Close</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  styles: [
    `
      ::ng-deep .mat-calendar-body-cell-content {
        color: #b8995f;
      }
      ::ng-deep .mat-calendar-body-selected {
        background-color: #b8995f;
        color: black;
      }
    `,
  ],
})
export class CalendarDialog {
  // Example show dates
  showDates = [
    new Date(2023, 6, 15),
    new Date(2023, 6, 22),
    new Date(2023, 7, 5),
    new Date(2023, 7, 12),
  ];

  dateClass = (date: Date): string => {
    return this.showDates.some((d) => d.getTime() === date.getTime())
      ? 'show-date'
      : '';
  };
}
