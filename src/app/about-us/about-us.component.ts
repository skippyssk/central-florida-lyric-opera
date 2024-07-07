import {
  Component,
  OnInit,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  billDoherty = {
    name: 'Bill Doherty',
    title: 'Pianist, Voice Teacher/Coach, Composer, and Conductor',
    image: 'assets/images/bill.jpg',
    biography: [
      'Bill Doherty is a pianist, voice teacher/coach, composer and conductor. He is a protégé of the legendary soprano Licia Albanese (Metropolitan Opera, La Scala, etc.).',
      "As a pianist and conductor, Mr. Doherty has performed in some of the world's finest performance halls including The Prudential Center (Boston), Lincoln Center (New York), St. Patrick's Cathedral (New York), the Villa Faccanoni - Lake Iseo (Italy), to mention a few. He received international critical acclaim in 2012 for his concert performances in Kyoto and Osaka Japan with operatic soprano Takako Yamamoto and tenor Oscar Feliu.",
      'In November of 2012, he conducted members of the Central Florida Lyric Opera in a special Mass of Thanksgiving at the Vatican for Pope Benedict XVI and in concerts in and around Rome, Italy. Most recently, his original composition "Messa di Requiem" received its world-premier in Jerusalem, Israel where he conducted his choir of over 100 members along with soloists from the Central Florida Lyric Opera.',
      "He has conducted and accompanied extensively in opera for over 20 years, collaborating with some of the world's greatest operatic stars including the legendary Licia Albanese and serving as accompanist to world-renowned Metropolitan Opera sopranos Deborah Voigt, Molly Fillmore and Susan Neves.",
      "Mr. Doherty is also one of the nation's leading voice coaches and operates a teaching studio in both Florida and New York City. His students have drawn international attention in principal roles with opera companies throughout the United States and Europe, on and off Broadway, and by winning top awards in national and international vocal competitions including the Metropolitan Opera Competition (NYC).",
      'Most recently, his student Fernando Varela and his trio "FORTE" has been featured advancing in the world-renowned talent competition America\'s Got Talent. An internationally recognized teacher and workshop clinician, Bill Doherty has conducted Master Classes in opera and voice at universities and conservatories throughout the world, including Marymount Manhattan College NYC, and the Conservatoire Leo Delibes, Ville de Clichy-La-Garenne, France, among others.',
      'His interviews and performances have been broadcast on PBS, CBS, and NBC. He has also appeared on various talk shows including the "Late Show with David Letterman".',
      "Year after year, for the past twenty years, Mr. Doherty has served as adjudicator for the Licia Albanese-Puccini Foundation's International Vocal Competition in New York City and has also performed as an accompanist for the Foundation's Gala concert at Lincoln Center, NY. He also is an adjudicator for the prestigious Gerda Lissner International Opera Competition, NYC and most recently was also appointed adjudicator for the Giulio Gari Foundation International Opera Competition NYC.",
      'He is Founder and General Director of the Central Florida Lyric Opera, Inc. His recent work with the International Opera Center of America has been recognized and commended by both Florida Governor Charlie Crist and former United States President George W. Bush. Mr. Doherty is the Director of Music at St. Timothy Catholic Church in the Villages, FL.',
      'Among his many other honors and awards, Mr. Doherty is the recipient of the New York State Council on the Arts Humanities Award. Most recently, his signature has been immortalized on the Muro di Alassio in Alassio, Italy.',
    ],
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    console.log('Biography data:', this.billDoherty.biography);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkBiographyRendered();
    }
  }

  checkBiographyRendered() {
    const biographySection = document.getElementById('biography-section');
    if (biographySection) {
      console.log('Biography section found in DOM');
      console.log('Biography content:', biographySection.innerHTML);
    } else {
      console.log('Biography section not found in DOM');
    }
  }
}
