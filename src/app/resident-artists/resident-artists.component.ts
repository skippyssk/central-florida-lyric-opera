import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resident-artists',
  templateUrl: './resident-artists.component.html',
  styleUrls: ['./resident-artists.component.css'],
})
export class ResidentArtistsComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  applicationLink: string = '/resident-artist-application';
  pdfDocuments = [
    {
      name: 'Program Overview',
      url: 'assets/images/residenArtist.pdf',
    },
    {
      name: 'Application Guidelines',
      url: 'assets/pdfs/application-guidelines.pdf',
    },
    {
      name: 'Audition Requirements',
      url: 'assets/pdfs/audition-requirements.pdf',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    // Convert the YouTube watch URL to an embed URL
    const videoId = 'iDT5jbcAU-A';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  ngOnInit(): void {}

  downloadPdf(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'document.pdf';
    link.click();
  }
}
