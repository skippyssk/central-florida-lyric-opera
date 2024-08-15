import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choir-dashboard',
  templateUrl: './choir-dashboard.component.html',
  styleUrls: ['./choir-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ChoirDashboardComponent {
  youtubeVideos = [
    {
      title: 'Change The World (Bill & Angie)',
      url: 'https://youtu.be/LeD--Y_CFpI?si=j3-XndnijhkWRXrf',
    },
    {
      title: 'Still Still Still',
      url: 'https://www.youtube.com/watch?v=cjtKri7Mb38&ab_channel=BenjaminTan',
    },
    {
      title: "He's Got The Whole World in His Hand",
      url: 'https://www.youtube.com/watch?v=1rR_B-WHkEY&ab_channel=OperaBuff',
    },
    {
      title: 'Soon Ah Will Be Done (1)',
      url: 'https://www.youtube.com/watch?v=WHrn8HMDFTA&ab_channel=AtlantaMasterChorale',
    },
    {
      title: 'Soon Ah Will Be Done (2)',
      url: 'https://youtu.be/gyVjlaeHGlA?si=BNcgQBtqjaku3SWy',
    },
    {
      title: 'The transformative power of classical music',
      url: 'https://www.ted.com/talks/benjamin_zander_the_transformative_power_of_classical_music?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare',
    },
    {
      title: 'For The Beauty of the Earth (John Rudder)',
      url: 'https://youtu.be/1bDoMflYErE?si=RUV8sB9bDZXAKQYN',
    },
    {
      title: 'Preghiera (Marzagalia - The Prayer)',
      url: 'https://youtu.be/stl2Ud0Dog0?si=vBtc1SvSkKk5411s',
    },
    {
      title: 'Mass of Creation (Marty Haugen)',
      url: 'https://youtu.be/TYy33BDXK0Y?si=03XCAPpzsVdsvCYW',
    },
    {
      title: 'Coventry Carol (arr. Martin Shaw)',
      url: 'https://youtu.be/H70aYB7fTWw?si=vjN2ppHYBF84ylul',
    },
  ];

  voiceParts = [
    {
      name: 'Soprano',
      url: 'https://soundcloud.com/dave-harrold/sets/soprano-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Alto',
      url: 'https://soundcloud.com/dave-harrold/sets/alto-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Tenor',
      url: 'https://soundcloud.com/dave-harrold/sets/tenor-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Bass',
      url: 'https://soundcloud.com/dave-harrold/sets/bass-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  ];

  chantMassRehearsalSongs = [
    {
      title: 'Kyrie',
      url: 'https://youtu.be/H70aYB7fTWw?si=vjN2ppHYBF84ylul',
    },
    {
      title: 'Agnus Dei',
      url: 'https://youtu.be/f-WJK_Fjkkw',
    },
    {
      title: 'Sanctus',
      url: 'https://youtu.be/LLg-iXsg8WY',
    },
    {
      title: 'Post Consecratio',
      url: 'https://youtu.be/b80RWxLC_XY',
    },
  ];

  soonAhWillBeDoneParts = [
    {
      name: 'Soprano',
      url: 'https://soundcloud.com/dave-harrold/sets/soprano-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Alto',
      url: 'https://soundcloud.com/dave-harrold/sets/alto-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Tenor',
      url: 'https://soundcloud.com/dave-harrold/sets/tenor-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Bass',
      url: 'https://soundcloud.com/dave-harrold/sets/bass-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  ];

  spotifyPlaylists = [
    {
      name: 'SATB',
      url: 'https://soundcloud.com/dave-harrold/sets/choir-rehearsal?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Bass Parts',
      url: 'https://soundcloud.com/dave-harrold/sets/bass-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Tenor Parts',
      url: 'https://soundcloud.com/dave-harrold/sets/tenor-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Alto Parts',
      url: 'https://soundcloud.com/dave-harrold/sets/alto-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      name: 'Soprano Parts',
      url: 'https://soundcloud.com/dave-harrold/sets/soprano-parts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  ];

  downloadPdfReader() {
    window.open('https://www.adobe.com/acrobat/pdf-reader.html', '_blank');
  }

  openGoogleFolder() {
    // Replace with actual Google Folder URL
    window.open(
      'https://drive.google.com/drive/folders/15EawaPXp1OVwBXTNyjfPke4LGHFdC_Aq',
      '_blank'
    );
  }
}
