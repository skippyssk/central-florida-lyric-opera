import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MediaItem {
  type: 'video' | 'image';
  title: string;
  description: string;
  source: string;
  coverImage: string;
}

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  mediaItems: MediaItem[] = [
    {
      type: 'video',
      title: 'La Bohème Highlights',
      description:
        "Experience the passion and drama of our recent production of Puccini's La Bohème.",
      source: 'https://www.youtube.com/embed/VIDEO_ID_1',
      coverImage: 'assets/images/la-boheme-cover.jpg',
    },
    {
      type: 'image',
      title: 'Behind the Scenes',
      description:
        'A glimpse into the preparation for our upcoming performance.',
      source: 'assets/images/behind-scenes.jpg',
      coverImage: '',
    },
    {
      type: 'video',
      title: 'Opera Gala Concert',
      description:
        'Highlights from our annual Opera Gala featuring world-renowned singers.',
      source: 'https://www.dropbox.com/s/VIDEO_ID_2/video.mp4',
      coverImage: 'assets/images/gala-cover.jpg',
    },
    {
      type: 'image',
      title: 'Meet the Artists',
      description:
        'Our talented resident artists who bring the magic of opera to life.',
      source: 'assets/images/meet-artists.jpg',
      coverImage: '',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize video URLs
    this.mediaItems = this.mediaItems.map((item) => {
      if (item.type === 'video') {
        return {
          ...item,
          source: this.sanitizer.bypassSecurityTrustResourceUrl(
            item.source
          ) as string,
        };
      }
      return item;
    });
  }
}
