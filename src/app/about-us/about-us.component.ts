import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class AboutUsComponent {
  expandedSections = {
    mission: false,
    history: false,
    programs: false,
    policies: false,
    qualities: false,
    classes: false,
  };

  toggleSection(
    section:
      | 'mission'
      | 'history'
      | 'programs'
      | 'policies'
      | 'qualities'
      | 'classes'
  ) {
    this.expandedSections[section] = !this.expandedSections[section];
  }
}
