import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resident-artist-application',
  templateUrl: './resident-artist-application.component.html',
  styleUrls: ['./resident-artist-application.component.css'],
})
export class ResidentArtistApplicationComponent implements OnInit {
  googleFormUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.googleFormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://docs.google.com/forms/d/e/1FAIpQLScHjbAoc6uTkkaPl2wzL2sE2CN9pXn9QGRrH0G81vsdxMo_7Q/viewform?embedded=true'
    );
  }

  ngOnInit(): void {}
}
