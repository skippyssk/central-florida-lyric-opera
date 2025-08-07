import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ShowListShow {
  id?: string;
  title: string;
  image: string;
  description: string;
  date: string;
  venue: string;
  time?: string;
  buttonText?: string;
  available?: boolean;
}

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
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
