import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ResidentArtistsComponent } from './resident-artists/resident-artists.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'resident-artists', component: ResidentArtistsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    TicketsComponent,
    ResidentArtistsComponent,
    MediaComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
})
export class AppModule {}
