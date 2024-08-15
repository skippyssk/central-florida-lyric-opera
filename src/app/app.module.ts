import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import all components
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ResidentArtistsComponent } from './resident-artists/resident-artists.component';
import { ResidentArtistApplicationComponent } from './resident-artist-application/resident-artist-application.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [ResidentArtistApplicationComponent, AboutUsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import standalone components here
    ContactComponent,

    ResidentArtistsComponent,
    // Declare non-standalone components here
    HomeComponent,
    TicketsComponent,

    MediaComponent,
  ],
  providers: [],
  bootstrap: [], // AppComponent is used as the bootstrap component
})
export class AppModule {}
