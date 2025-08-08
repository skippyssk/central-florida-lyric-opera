import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent {
  @Input() shows: ShowListShow[] = [];
  @Input() mode: 'main' | 'lesser' | 'oc' | 'tickets-main' = 'main';
  @Input() mobile: boolean = false;
  @Output() showButtonClick = new EventEmitter<ShowListShow>();

  onButtonClick(show: ShowListShow) {
    this.showButtonClick.emit(show);
  }
}
