import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ResidentArtistsComponent } from './resident-artists/resident-artists.component';
import { ResidentArtistApplicationComponent } from './resident-artist-application/resident-artist-application.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { ChoirComponent } from './choir/choir.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonateComponent } from './donate/donate.component';
import { ChoirDashboardComponent } from './choir-dashboard/choir-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'resident-artist', component: ResidentArtistsComponent },
  {
    path: 'resident-artist-application',
    component: ResidentArtistApplicationComponent,
  },
  { path: 'media', component: MediaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'choir', component: ChoirComponent },
  { path: 'about-us', component: AboutUsComponent }, // Add this line
  { path: 'donate', component: DonateComponent },
  { path: 'choir-dashboard', component: ChoirDashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
