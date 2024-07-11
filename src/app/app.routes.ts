import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResidentArtistsComponent } from './resident-artists/resident-artists.component';
import { ResidentArtistApplicationComponent } from './resident-artist-application/resident-artist-application.component';
import { ChoirComponent } from './choir/choir.component';
import { TicketsComponent } from './tickets/tickets.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'resident-artist', component: ResidentArtistsComponent },
  {
    path: 'resident-artist-application',
    component: ResidentArtistApplicationComponent,
  },
  { path: 'tickets', component: TicketsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'choir', component: ChoirComponent },
  { path: 'donate', component: DonateComponent },
  { path: '**', redirectTo: '' },
];
