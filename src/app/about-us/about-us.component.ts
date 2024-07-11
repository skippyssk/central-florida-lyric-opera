import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { Meta } from '@angular/platform-browser';

interface Artist {
  name: string;
  title: string;
  image: string;
  fullBiography: string;
  galleryImages: string[];
  facebookUrl: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  artists = [
    {
      name: 'Maestro Bill Doherty',
      title: 'Pianist, Voice Teacher/Coach, Composer, and Conductor',
      image: 'assets/images/bill.jpg',
      fullBiography: `Bill Doherty is a pianist, voice teacher/coach, composer and conductor. He is a protégé of the legendary soprano Licia Albanese (Metropolitan Opera, La Scala, etc.).

    As a pianist and conductor, Mr. Doherty has performed in some of the world's finest performance halls including The Prudential Center (Boston), Lincoln Center (New York), St. Patrick's Cathedral (New York), the Villa Faccanoni - Lake Iseo (Italy), to mention a few. He received international critical acclaim in 2012 for his concert performances in Kyoto and Osaka Japan with operatic soprano Takako Yamamoto and tenor Oscar Feliu.

    In November of 2012, he conducted members of the Central Florida Lyric Opera in a special Mass of Thanksgiving at the Vatican for Pope Benedict XVI and in concerts in and around Rome, Italy. Most recently, his original composition "Messa di Requiem" received its world-premier in Jerusalem, Israel where he conducted his choir of over 100 members along with soloists from the Central Florida Lyric Opera.

    He has conducted and accompanied extensively in opera for over 20 years, collaborating with some of the world's greatest operatic stars including the legendary Licia Albanese and serving as accompanist to world-renowned Metropolitan Opera sopranos Deborah Voigt, Molly Fillmore and Susan Neves.

    Mr. Doherty is also one of the nation's leading voice coaches and operates a teaching studio in both Florida and New York City. His students have drawn international attention in principal roles with opera companies throughout the United States and Europe, on and off Broadway, and by winning top awards in national and international vocal competitions including the Metropolitan Opera Competition (NYC).

    Most recently, his student Fernando Varela and his trio "FORTE" has been featured advancing in the world-renowned talent competition America's Got Talent. An internationally recognized teacher and workshop clinician, Bill Doherty has conducted Master Classes in opera and voice at universities and conservatories throughout the world, including Marymount Manhattan College NYC, and the Conservatoire Leo Delibes, Ville de Clichy-La-Garenne, France, among others.

    His interviews and performances have been broadcast on PBS, CBS, and NBC. He has also appeared on various talk shows including the "Late Show with David Letterman".

    Year after year, for the past twenty years, Mr. Doherty has served as adjudicator for the Licia Albanese-Puccini Foundation's International Vocal Competition in New York City and has also performed as an accompanist for the Foundation's Gala concert at Lincoln Center, NY. He also is an adjudicator for the prestigious Gerda Lissner International Opera Competition, NYC and most recently was also appointed adjudicator for the Giulio Gari Foundation International Opera Competition NYC.

    He is Founder and General Director of the Central Florida Lyric Opera, Inc. His recent work with the International Opera Center of America has been recognized and commended by both Florida Governor Charlie Crist and former United States President George W. Bush. Mr. Doherty is the Director of Music at St. Timothy Catholic Church in the Villages, FL.

    Among his many other honors and awards, Mr. Doherty is the recipient of the New York State Council on the Arts Humanities Award. Most recently, his signature has been immortalized on the Muro di Alassio in Alassio, Italy.`,
      galleryImages: [
        'assets/images/bill1.png',
        'assets/images/bill2.png',
        'assets/images/bill3.jpg',
      ],
      facebookUrl: 'https://www.facebook.com/BillDohertyStudios',
    },
    {
      name: 'Molly Fillmore',
      title: 'Soprano',
      image: 'assets/images/mollyFilmore.png',
      fullBiography: `Hailed by the Neue Zürcher Zeitung as "phenomenal" in her role debut as Marietta in Die tote Stadt, Molly Fillmore made her Metropolitan Opera debut as Helmwige in the Met’s newest, Grammy-winning production of Der Ring der Nibelungen, conducted by James Levine and directed by Robert Lepage. She returned to the Met to sing a principal role in Satyagraha by Philip Glass. Both Satyagraha and Die Walküre were shown live in movie theaters around the world as part of the Met’s Live in HD series as well as on PBS stations nationwide as part of their Great Performances series. She can be heard and seen on Deutsche Grammophon’s recent releases of the CD and DVD of Die Walküre from The Metropolitan Opera under the musical direction of James Levine and Fabio Luisi, as well as the 2021 release of Satyagraha from The Metropolitan Opera on both CD, DVD, and Spotify.

Her soprano debut was the title role of Salome at San Francisco Opera with music director Nicola Luisotti conducting. She covered the role of Brünnhilde and sang the role of Ortlinde in Francesca Zambello’s San Francisco Opera production of Die Walküre, conducted by Donald Runnicles. Molly Fillmore made her role debut as Marietta/Marie in Die tote Stadt with Theater St. Gallen, Switzerland in a production directed by Jan Schmidt-Garré and conducted by Otto Tausk.  She sang her first Tosca in 2016 and a year later debuted a second Puccini role, that of Turandot, opposite tenor Arnold Rawls. Also in 2017 she had role debut as Micaela in Carmen, a production for Central Florida Lyric Opera for which she also made her professional debut as a stage director.  Other American opera appearances include Seattle Opera, Arizona Opera, Spoleto Festival, and Washington National Opera.

Before her switch to dramatic soprano repertoire, Molly Fillmore had an international career as a mezzo-soprano, including five seasons as a principal soloist in the ensemble of Oper der Stadt Köln (Cologne Opera), where she appeared in numerous roles, including Cherubino in Le nozze di Figaro, Romeo in I Capuleti e I Montecchi, Don Ramiro in La finta giardiniera, Smeraldine in L’amour des trois oranges, Mercedes in Carmen, Wellgunde in Das Rheingold, and Waltraute in Die Walküre.  In Cologne, she worked with, among others, conductors Sir Jeffrey Tate, Robert Carsen, Daniele Callegari, Graeme Jenkins, and Philippe Auguin as well as stage directors Christof Loy, Günter Krämer, and Torsten Fischer. Other mezzo-soprano appearances included the roles of Orfeo in Orfeo ed Euridice with Chattanooga Opera, and Margret in Wozzeck for the Spoleto Festival. 

On the concert stage, has appeared as a soloist with the Boston Symphony Orchestra at Tanglewood, Mozart Requiem at Carnegie Hall, a Gershwin celebration and Mozart Requiem in Avery Fisher Hall at Lincoln Center, in the Mozart Requiem and Handel’s Messiah with the Detroit Symphony, La damnation de Faust with Utah Symphony, Vaughan Williams’ Magnificat and an opera gala with the Choral Arts Society of Washington, Isolde’s “Liebestod” at the Interlochen Arts Festival, Stravinsky’s Les Noces at the Great Lakes Chamber Festival, and in the Saint-Saëns Oratorio de Noël, broadcast on DeustchlandFunk Radio. Collaborators on the concert stage include Gerard Schwarz, Hans Graf, Lothar Koenigs, Keith Lockhart, John Rutter, Norman Scribner, and Nicholas McGegan.

An active recitalist, she studied German art song at the Franz-Schubert-Institut in Baden-bei-Wien, Austria, where her teachers included Walter Berry, Elly Ameling, Jörg Demus, Helmut Deutsch, and Rudolf Jansen.  She gave a joint recital with tenor Ernst Haefliger at the International Beethoven Festival in Bonn and has been heard in recital in Switzerland, Germany, Austria, China and various cities in the United States.  

Molly Fillmore made her solo operatic debut with the Washington National Opera at the Kennedy Center Opera House while a sophomore at American University. She remained in Washington, D.C. for her graduate degree, and by the time she had completed her Master's Degree at the University of Maryland, she had appeared in seven roles (including a principal role in the zarzuela El Gato Montes) with the Washington National Opera and as a soloist in numerous concerts at the Kennedy Center Concert Hall.  She graduated magna cum laude from American University and received the university's Evelyn Swarthout Hayes Award, given to the student who contributed most to the arts as an undergraduate. Her voice teachers have included Alice Silverthorn, Elizabeth Vrenios, Dominic Cossa, Marlena Malas, and Michael Warren, and she worked for over two decades with coach/pianist/conductor Alan Nathan.  

Alongside her singing activities, Molly Fillmore has long been an active pedagogue. While pursuing her Master's degree, she began her teaching career as a voice teacher for St. Alban's School and the National Cathedral School in Washington, D.C.  She has taught voice at the university level since 2004, first at Michigan State University, and since 2014, at the University of North Texas College of Music, where she became Division Chair in 2017.   
      `,
      galleryImages: [
        'assets/images/molly2.png',
        'assets/images/molly1.png',
        'assets/images/molly3.png',
      ],
      facebookUrl: 'https://www.facebook.com/profile.php?id=100080419431972',
    },
    {
      name: 'Maestro Andrea Elena',
      title: 'Tenor',
      image: 'assets/images/andreaElena.png',
      fullBiography: `Tenor, Andrea Elena has sung over 90 leading tenor roles in virtually every opera house in the world including La Scala (Milan), Teatro Comunale (Florence), Teatro Regio (Turin), La Fenice (Venice), Teatro dell’Opera (Rome), Teatro Filarmonico and the Arena (Verona) Teatro Comunale (Bologna) Teatro Regio (Parma) Teatro Bellini (Carania) among others.  In addition, he has sung in Germany, Holland, Austria, France, Switzerland, Spain, Portugal, England, Ireland, Norway, Denmark, Czechoslovakia, Rumania, Russia, Ukraine, Greece, Turkey, United States, Japan, South Korea, Israel, Egypt, Morocco, South Africa, South America, Argentina, Venezuela, Mexico, Peru, Brazil, and China.  

Maestro Elena has received acclaim from such great artists as Giuseppe di Stefano, Mario Del Monaco, Placido Domingo, Luciano Pavarotti, and Alfredo Kraus.    In addition, he has been the recipient of prestigious honors from The King Olav of Norway, The Queen Giuliana of Holland, the Premier Aznar of Spain, Henry Kissinger, The Princess of Morocco Yasmine, Nelson Mandela, President Scalfaro of Italy, the Premier Netanyao of Israel, President Mitterand of France, Helmut Kohl, Lady Diana and Prince Charles, and others too numerous to list.  

His operatic performances have been broadcast on Italian TV (RAI), German National TV, and throughout France, Spain, Switzerland.  His performance of the “Verdi Requiem” from Royal Albert Hall was televised internationally and attended by Lady Diana and Prince Charles.   

He has recorded for such prestigious record labels as Columbia Records, Nuova Era, Orpheus, Kikko Records, Lyra, Bongiovanni Classics.  He has performed virtually every leading tenor role in the lyric and lyrico spinto repertoire and has appeared in over 500 performances as the Duke in Verdi’s Rigoletto alone.  

During his career, he has shared the stage on numerous occasions with such great artists as Renato Bruson, Piero Cappuccilli, Fiorenza Cossotto, Mirella Freni, Cecilia Gasdia, Nicolai Ghiarov, Nicolai Ghiuselev, Bonaldo Jiaiotti, Raina Kabaiwanska, Leo Nucci, Aldo Protti, Ruggiero Raimondi, Katia Ricciarelli, Giuseppe Taddei, and many others.  He has been a favored tenor by many well known conductors such as Maurizio Arena, Bruno Bartoletti, Richard Bonynge, Mario Braggio, Riccardo Chailly, Gianandrea Gavazzini, Peter Maag, Giuseppe Patane, Michel Plasson, Georges Pretre, Nello Santi, and Hubert Soudant.  

Most recently, while continuing his personal opera and concert activities, he has devoted himself to the future of opera and young, gifted performers by teaching privately, stage directing opera productions throughout the world and by coaching singers in master classes, both in Italy and abroad. 
      `,
      galleryImages: [
        'assets/images/andreaElena.png',
        'assets/images/andrea1.jpg',
        'assets/images/andrea2.jpg',
      ],
      facebookUrl: 'https://www.facebook.com/CFLOpera/',
    },
    {
      name: 'Grant Norman',
      title: 'Broadway Star, Acting Teacher, and Stage Director',
      image: 'assets/images/grantNorman.jpg',
      fullBiography: `Best known for his portrayal of the Phantom in the Broadway production of Andrew LLoyd Webber's Phantom of the Opera, Broadway star Grant Norman, himself a graduate of Central Florida Lyric Opera's Resident Artist Training Program, now returns to the company as Acting Teacher and Stage Director..

Grant Norman started out in theater with the Red River Dance & Performing Company in Fargo, ND.  He was a member of their company for 4 years, during which time he worked his way through the ranks to become a principal dancer.  During his 11 original productions with the company he was fortunate enough to work with its directors, Kathy & Eddie Gasper. Their experience and generosity proved to be invaluable to Grant.  Kathy was a successful classical ballerina and Eddie was a Broadway veteran and former Assistant to Bob Fosse. Under their tutelage he learned Tap, Jazz, Ballet and Character dancing. 

Grant Norman’s first starring role in musical theatre was with the Red River Dance & Performing Co. as “Paul” in Carnival; which happened to be a joint production between the Red River Dance & Performing Co. and The Fargo/Moorhead Community Theatre.  In the following years, Grant began working in many wonderful regional theatres throughout the country while returning to Fargo and the Red River Dance & Performing Co. to play “Tony” in West Side Story. 

Some of his most highly acclaimed regional roles included “Smudge” in Forever Plaid (Alley Theatre, TX), “Petruchio” in Taming of the Shrew, “Curley” in Oklahoma (Jupiter Theatre, FL), the “Prince/Wolf” in Into the Woods (Seaside Music Theatre, FL), “Max” in Lend Me a Tenor (Hippodrome Theatre, FL), “Gaston” in Gigi (Royal Palm Dinner Theatre, FL), “Johnny Canton” in 1940's Radio Hour (Ruth Foreman Theatre, FL), “Adam” in Seven Brides for Seven Brothers (Mark II Dinner Theatre, FL), “Corporal Billy Jester” in Little Mary Sunshine (North Dakota Repertory Theatre, ND), and “Sydney Carton” in A Tale of Two Cities (Backers Production, NYC).

In 1990, Grant Norman began his long-standing musical affiliation with Maestro Bill Doherty when he joined the Central Florida Lyric Opera’s Resident Artist Training Program.  As a member of the training program, Grant studied classical Italian opera singing with Mr. Doherty and also appeared in numerous concerts and opera programs with Bill Doherty and the Central Florida Lyric Opera. 

Grant moved to New York City in 1991 where he immediately joined the cast of two legendary Broadway shows - Miss Saigon and The Phantom of the Opera. “My time with The Phantom of the Opera on Broadway led to the opportunity to tour the U.S. as the Phantom in the National Touring Company. I then went on to play the Phantom in London at Her Majesty's Theatre.  After I returned to the States, I took some needed time off; and then accepted a contract, working for Disney, touring the U.S. and Canada as the “Beast” in Beauty and the Beast”, (a role for which he was nominated for two National Theatre Awards). “Although I loved touring our beautiful country, I was happy to be home again in New York.”  Once back in New York, he landed a role in the Off-Broadway production of Johnny Guitar where he can be found on the Original Cast Recording.

Most recently, Grant Norman finished a 2 1/2 year run playing the role of Gaston in the Broadway production of Disney's Beauty and the Beast and also appeared in the hit television drama “Law & Order”.
 
      `,
      galleryImages: [
        'assets/images/grant1.png',
        'assets/images/grant2.png',
        'assets/images/grant3.png',
      ],
      facebookUrl: 'https://www.facebook.com/CFLOpera/',
    },
    // ... Similar updates for Andrea Elena and Grant Norman
  ];
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.setFacebookMetaTags();
  }

  getBiographyParagraphs(biography: string): string[] {
    return biography.split('\n\n').map((para) => para.trim());
  }

  setFacebookMetaTags() {
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://yourwebsite.com/about-us',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'About Us - Central Florida Lyric Opera',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Meet the talented artists of Central Florida Lyric Opera',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://yourwebsite.com/assets/images/cflo-logo.jpg',
    });
  }
}
