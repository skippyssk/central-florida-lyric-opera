import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MediaItem {
  type: 'video';
  title: string;
  description: string;
  source: string | SafeResourceUrl;
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
      title:
        'Libiamo from La Traviata - Central Florida Lyric Opera Highlights',
      description:
        "Experience the elegance and vibrancy of Verdi's Libiamo through this highlight video featuring the Central Florida Lyric Opera. Captured in stunning detail, this short clip showcases the beauty and energy of one of opera's most iconic pieces. Set to the backdrop of lively scenes and passionate vocals, this video offers a glimpse into the artistry and talent of the Central Florida Lyric Opera. ",
      source: 'https://www.youtube.com/embed/OZMvB4YEisE',
    },
    {
      type: 'video',
      title: 'God Bless America - Central Florida Lyric Opera Highlights',
      description:
        'Celebrate the spirit of patriotism with this moving highlight video of the Central Florida Lyric Opera performing "God Bless America." In this stirring rendition of Irving Berlin\'s classic anthem, the powerful voices of the Central Florida Lyric Opera fill the air with pride and reverence. This video captures the heartfelt emotion and unity that this timeless song inspires, showcasing the opera\'s deep connection to the community and country.',
      source: 'https://www.youtube.com/embed/rzsHtMkZb98',
    },
    {
      type: 'video',
      title: "Maestro Bill Doherty's Talent Explosion",
      description:
        "Welcome to the first installment of the Maestro Bill Doherty's Talent Explosion, a series showcasing the incredible talents nurtured by Maestro Bill Doherty. In this premiere video, several of Maestro Doherty's renowned singing servers take center stage to perform a selection of popular opera pieces.",
      source: 'https://www.youtube.com/embed/wOiaGbIAjI0',
    },
    {
      type: 'video',
      title:
        'Fernando Varela - I Believe in You (Conducted by Maestro Bill Doherty)',
      description:
        "In this captivating video, internationally acclaimed tenor Fernando Varela delivers a powerful performance of the unique composition \"I Believe in You\" during his solo PBS special at the packed Dr. Phillips Center in Orlando. Conducted by the esteemed Maestro Bill Doherty, this piece highlights Varela's extraordinary vocal range and emotional depth, showcasing his distinctive pop crossover technique. The performance is a testament to the synergy between singer and conductor, with Maestro Doherty's masterful direction amplifying the composition's inspiring message.",
      source: 'https://www.youtube.com/embed/5R3obaxehgo',
    },

    {
      type: 'video',
      title:
        "Maestro Bill Doherty's Talent Explosion - An Interview with Aprile Millo",
      description:
        "In this special installment of the Maestro Bill Doherty Talent Explosion series, Maestro Bill Doherty sits down with world-renowned soprano Aprile Millo for an intimate and insightful interview. Known for her powerful voice and extraordinary career, Millo shares her experiences, challenges, and triumphs in the world of opera. Through their conversation, viewers gain a rare glimpse into the life and artistry of one of opera's greatest talents.",
      source: 'https://www.youtube.com/embed/gCeRtcSPPqE',
    },
    {
      type: 'video',
      title: "Maestro Bill Doherty's Requiem - Requiem Eternam",
      description:
        "Experience the profound beauty of the first movement of Maestro Bill Doherty's Requiem, a powerful and unique composition that holds the distinction of being performed at the Vatican. In this video, Maestro Doherty's masterful blend of solemnity and grace is brought to life, offering a deeply moving musical journey that resonates with both reverence and emotion. The composition reflects Maestro Doherty's exceptional talent and his ability to convey the profound themes of life, death, and redemption through music.",
      source: 'https://www.youtube.com/embed/SKkvNbPDha0',
    },
    {
      type: 'video',
      title: 'Maestro Bill Doherty Performs Clair de Lune',
      description:
        "In this enchanting video, Maestro Bill Doherty brings Claude Debussy's iconic piece Clair de Lune to life with a masterful piano performance. Known for its delicate melodies and evocative atmosphere, Clair de Lune is a piece that has captivated audiences for generations. Maestro Doherty's interpretation highlights the subtle beauty and emotional depth of this timeless composition, offering listeners a moment of tranquility and reflection.",
      source: 'https://www.youtube.com/embed/luJVePopT0Q',
    },
    {
      type: 'video',
      title: "Showcase of Maestro Bill Doherty's World-Famous Singing Servers",
      description:
        "Prepare to be amazed by the extraordinary talents of Maestro Bill Doherty's world-famous singing servers in this captivating showcase. These gifted performers, known for their incredible ability to blend service with song, deliver unforgettable renditions of beloved opera arias and musical theater classics. Under the guidance of Maestro Bill Doherty, these singing servers have become a unique sensation, combining their passion for music with their commitment to hospitality.",
      source: 'https://www.youtube.com/embed/ud2TL-TGOUU',
    },
    {
      type: 'video',
      title:
        'Debbie Garrett Sings "Smile" and "Somewhere Over the Rainbow" with Maestro Bill Doherty on Piano',
      description:
        'In this heartwarming video, the talented Debbie Garrett delivers a beautiful performance of two beloved classics, "Smile" and "Somewhere Over the Rainbow," in the illustrious Villanova d\'Albenga. Accompanied by the masterful piano playing of Maestro Bill Doherty. Garrett\'s soulful voice brings new depth and emotion to these timeless songs, while Maestro Doherty\'s sensitive and expressive piano work perfectly complements her vocals.',
      source: 'https://www.youtube.com/embed/lgMQPijeFKg',
    },
    {
      type: 'video',
      title: 'Change the World - Maestro Bill Doherty & Angie Rose',
      description:
        'In this heartfelt video, Maestro Bill Doherty and Angie Rose come together to perform their original song "Change the World." Written during the challenging days of the COVID pandemic, this powerful composition was created to inspire hope and resilience. Through their poignant lyrics and soulful melodies, Maestro Doherty and Rose convey a message of unity and the possibility of positive change in the face of adversity. This performance is a testament to the strength of the human spirit and the power of music to heal and uplift.',
      source: 'https://www.youtube.com/embed/LeD--Y_CFpI',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize video URLs
    this.mediaItems = this.mediaItems.map((item) => ({
      ...item,
      source: this.sanitizer.bypassSecurityTrustResourceUrl(
        item.source as string
      ),
    }));
  }
}
