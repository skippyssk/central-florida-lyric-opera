import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add this import

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
  selector: 'app-resident-artists',
  templateUrl: './resident-artists.component.html',
  styleUrls: ['./resident-artists.component.css'],
  standalone: true, // Add this line
  imports: [CommonModule, RouterModule, MatExpansionModule], // Add this line
})
export class ResidentArtistsComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  applicationLink: string = '/resident-artist-application';
  artists = [
    {
      name: 'Maestro Bill Doherty',
      title: 'President, Pianist, Voice Teacher/Coach, Composer, and Conductor',
      image: 'assets/images/bill.webp',
      fullBiography: `Maestro Bill Doherty has been performing as a concert pianist since the age of four and continues to delight audiences all over the world with his virtuosity at the keyboard. His musical studies included intensive training in piano, conducting, musical composition and voice, studying with such well-known teachers as Albert Bowen (Tanglewood), Barbara Marchesani, Pasquale Caputo (Mohawk Valley Opera), Solomon Mikowski and Sonia Vargas (Manhattan School of Music), Abraham Kaplan (Juilliard School of Music), Carmen Savoca and Peyton Hibbitt (Tri-Cities Opera, NY), and Rita Shane (Metropolitan Opera, Vienna StaatsOper). As an operatic tenor, he sang with the Mohawk Valley Opera and the Tri-Cities Opera, and was later mentored by the legendary soprano Licia Albanese (Metropolitan Opera, La Scala).

 

As a composer, conductor, pianist and singer, Mr. Doherty has performed in some of the world's finest performance halls and Cathedrals including the Vatican, Lincoln Center (New York), St. Patrick’s Cathedral (New York), The Prudential Center (Boston), the Villa Faccanoni - Lake Iseo (Italy), and on tour throughout Italy and Asia. He received international critical acclaim for his performances in Kyoto and Osaka, Japan with operatic soprano Takako Yamamoto and tenor Oscar Feliu. In 2012, he conducted members of the Central Florida Lyric Opera and the St. Timothy Choir in a special Mass of Thanksgiving at the Vatican for Pope Benedict XVI and in concerts in an around Rome, Italy. His original composition “Requiem” received its world premiere in Jerusalem, Israel in 2014 under the auspices of the Pontifical Institute of Sacred Music (Pontifico Instituto di Musica Sacra) and in 2016 was presented in Rome, Italy where he and his choir also sang for the “Closing of the Holy Doors” at the Vatican for Pope Francis. In August of 2022, he conducted the world premiere of another original composition “Requiem for World Peace” at the Salzburg Festival in Austria and in October of 2022, was inducted into his High School Alma Mater’s “Hall of Distinction” in Clinton, NY. He has conducted and accompanied extensively in opera for over 35 years, collaborating with some of the world’s greatest operatic stars including the legendary Licia Albanese as well as Galina Vishnevskaya, and serving as accompanist to world-renowned Metropolitan Opera sopranos Deborah Voigt, Susan Neves and Grammy Award winning operatic soprano, Molly Fillmore among many others.

 

Mr. Doherty is also one of the nation's leading voice coaches and operates a teaching studio in both Florida and New York City. His students have drawn international attention in principal roles with opera companies throughout the world, on and off Broadway, and by winning top awards in national and international vocal competitions including the Metropolitan Opera Competition (NYC) among others. His student Fernando Varela (“FORTE”) was among the finalists in the world-renowned talent competition America’s Got Talent. An internationally recognized teacher and workshop clinician, Bill Doherty has conducted Master Classes in opera and voice at universities and conservatories throughout the world, including Marymount Manhattan College NYC, and the Conservatoire Leo Delibes, Ville de Clichy-La-Garenne, France, additionally throughout Italy, among others. His interviews and performances have been broadcast on PBS, CBS, and NBC. He has also appeared on various talk shows including the "Late Show with David Letterman".

 

Year after year, Mr. Doherty has served as adjudicator for the Licia Albanese-Puccini Foundation’s International Vocal Competition in New York City and has also performed as an accompanist for the Foundation’s Gala concert several times at Lincoln Center, NY. He also is adjudicator for the prestigious Gerda Lissner International Opera Competition, NYC and the Giulio Gari International Vocal Competition, NYC.

 

He is Founder and General Director of the Central Florida Lyric Opera, Inc. and is the Director of Music at St. Timothy’s Catholic Church (The Villages, FL).  His work with the International Opera Center of America, Central Florida Lyric Opera’s International Exchange Program, has been recognized and commended by both Florida Governor Charlie Crist and United States President George W. Bush. Among his many honors and awards, Mr. Doherty is the recipient of the New York State Council on the Arts Humanities Award and his signature has been immortalized on the “Muro di Alassio” in Alassio, Italy`,
      galleryImages: [
        'assets/images/bill1.webp',
        'assets/images/bill2.webp',
        'assets/images/bill3.webp',
      ],
    },
    {
      name: 'Molly Fillmore',
      title: 'Soprano',
      image: 'assets/images/mollyFilmore.webp',
      fullBiography: `Hailed by the Neue Zürcher Zeitung as "phenomenal" in her role debut as Marietta in Die tote Stadt, Molly Fillmore made her Metropolitan Opera debut as Helmwige in the Met’s newest, Grammy-winning production of Der Ring der Nibelungen, conducted by James Levine and directed by Robert Lepage. She returned to the Met to sing a principal role in Satyagraha by Philip Glass. Both Satyagraha and Die Walküre were shown live in movie theaters around the world as part of the Met’s Live in HD series as well as on PBS stations nationwide as part of their Great Performances series. She can be heard and seen on Deutsche Grammophon’s recent releases of the CD and DVD of Die Walküre from The Metropolitan Opera under the musical direction of James Levine and Fabio Luisi, as well as the 2021 release of Satyagraha from The Metropolitan Opera on both CD, DVD, and Spotify.

Her soprano debut was the title role of Salome at San Francisco Opera with music director Nicola Luisotti conducting. She covered the role of Brünnhilde and sang the role of Ortlinde in Francesca Zambello’s San Francisco Opera production of Die Walküre, conducted by Donald Runnicles. Molly Fillmore made her role debut as Marietta/Marie in Die tote Stadt with Theater St. Gallen, Switzerland in a production directed by Jan Schmidt-Garré and conducted by Otto Tausk.  She sang her first Tosca in 2016 and a year later debuted a second Puccini role, that of Turandot, opposite tenor Arnold Rawls. Also in 2017 she had role debut as Micaela in Carmen, a production for Central Florida Lyric Opera for which she also made her professional debut as a stage director.  Other American opera appearances include Seattle Opera, Arizona Opera, Spoleto Festival, and Washington National Opera.

Before her switch to dramatic soprano repertoire, Molly Fillmore had an international career as a mezzo-soprano, including five seasons as a principal soloist in the ensemble of Oper der Stadt Köln (Cologne Opera), where she appeared in numerous roles, including Cherubino in Le nozze di Figaro, Romeo in I Capuleti e I Montecchi, Don Ramiro in La finta giardiniera, Smeraldine in L’amour des trois oranges, Mercedes in Carmen, Wellgunde in Das Rheingold, and Waltraute in Die Walküre.  In Cologne, she worked with, among others, conductors Sir Jeffrey Tate, Robert Carsen, Daniele Callegari, Graeme Jenkins, and Philippe Auguin as well as stage directors Christof Loy, Günter Krämer, and Torsten Fischer. Other mezzo-soprano appearances included the roles of Orfeo in Orfeo ed Euridice with Chattanooga Opera, and Margret in Wozzeck for the Spoleto Festival. 

On the concert stage, has appeared as a soloist with the Boston Symphony Orchestra at Tanglewood, Mozart Requiem at Carnegie Hall, a Gershwin celebration and Mozart Requiem in Avery Fisher Hall at Lincoln Center, in the Mozart Requiem and Handel’s Messiah with the Detroit Symphony, La damnation de Faust with Utah Symphony, Vaughan Williams’ Magnificat and an opera gala with the Choral Arts Society of Washington, Isolde’s “Liebestod” at the Interlochen Arts Festival, Stravinsky’s Les Noces at the Great Lakes Chamber Festival, and in the Saint-Saëns Oratorio de Noël, broadcast on DeustchlandFunk Radio. Collaborators on the concert stage include Gerard Schwarz, Hans Graf, Lothar Koenigs, Keith Lockhart, John Rutter, Norman Scribner, and Nicholas McGegan.

An active recitalist, she studied German art song at the Franz-Schubert-Institut in Baden-bei-Wien, Austria, where her teachers included Walter Berry, Elly Ameling, Jörg Demus, Helmut Deutsch, and Rudolf Jansen.  She gave a joint recital with tenor Ernst Haefliger at the International Beethoven Festival in Bonn and has been heard in recital in Switzerland, Germany, Austria, China and various cities in the United States.  

Molly Fillmore made her solo operatic debut with the Washington National Opera at the Kennedy Center Opera House while a sophomore at American University. She remained in Washington, D.C. for her graduate degree, and by the time she had completed her Master's Degree at the University of Maryland, she had appeared in seven roles (including a principal role in the zarzuela El Gato Montes) with the Washington National Opera and as a soloist in numerous concerts at the Kennedy Center Concert Hall.  She graduated magna cum laude from American University and received the university's Evelyn Swarthout Hayes Award, given to the student who contributed most to the arts as an undergraduate. Her voice teachers have included Alice Silverthorn, Elizabeth Vrenios, Dominic Cossa, Marlena Malas, and Michael Warren, and she worked for over two decades with coach/pianist/conductor Alan Nathan.  

Alongside her singing activities, Molly Fillmore has long been an active pedagogue. While pursuing her Master's degree, she began her teaching career as a voice teacher for St. Alban's School and the National Cathedral School in Washington, D.C.  She has taught voice at the university level since 2004, first at Michigan State University, and since 2014, at the University of North Texas College of Music, where she became Division Chair in 2017.   
      `,
      galleryImages: [
        'assets/images/molly2.webp',
        'assets/images/molly1.webp',
        'assets/images/molly3.webp',
      ],
    },
    {
      name: 'Maestro Andrea Elena',
      title: 'Tenor',
      image: 'assets/images/andreaElena.webp',
      fullBiography: `Tenor, Andrea Elena has sung over 90 leading tenor roles in virtually every opera house in the world including La Scala (Milan), Teatro Comunale (Florence), Teatro Regio (Turin), La Fenice (Venice), Teatro dell’Opera (Rome), Teatro Filarmonico and the Arena (Verona) Teatro Comunale (Bologna) Teatro Regio (Parma) Teatro Bellini (Carania) among others.  In addition, he has sung in Germany, Holland, Austria, France, Switzerland, Spain, Portugal, England, Ireland, Norway, Denmark, Czechoslovakia, Rumania, Russia, Ukraine, Greece, Turkey, United States, Japan, South Korea, Israel, Egypt, Morocco, South Africa, South America, Argentina, Venezuela, Mexico, Peru, Brazil, and China.  

Maestro Elena has received acclaim from such great artists as Giuseppe di Stefano, Mario Del Monaco, Placido Domingo, Luciano Pavarotti, and Alfredo Kraus.    In addition, he has been the recipient of prestigious honors from The King Olav of Norway, The Queen Giuliana of Holland, the Premier Aznar of Spain, Henry Kissinger, The Princess of Morocco Yasmine, Nelson Mandela, President Scalfaro of Italy, the Premier Netanyao of Israel, President Mitterand of France, Helmut Kohl, Lady Diana and Prince Charles, and others too numerous to list.  

His operatic performances have been broadcast on Italian TV (RAI), German National TV, and throughout France, Spain, Switzerland.  His performance of the “Verdi Requiem” from Royal Albert Hall was televised internationally and attended by Lady Diana and Prince Charles.   

He has recorded for such prestigious record labels as Columbia Records, Nuova Era, Orpheus, Kikko Records, Lyra, Bongiovanni Classics.  He has performed virtually every leading tenor role in the lyric and lyrico spinto repertoire and has appeared in over 500 performances as the Duke in Verdi’s Rigoletto alone.  

During his career, he has shared the stage on numerous occasions with such great artists as Renato Bruson, Piero Cappuccilli, Fiorenza Cossotto, Mirella Freni, Cecilia Gasdia, Nicolai Ghiarov, Nicolai Ghiuselev, Bonaldo Jiaiotti, Raina Kabaiwanska, Leo Nucci, Aldo Protti, Ruggiero Raimondi, Katia Ricciarelli, Giuseppe Taddei, and many others.  He has been a favored tenor by many well known conductors such as Maurizio Arena, Bruno Bartoletti, Richard Bonynge, Mario Braggio, Riccardo Chailly, Gianandrea Gavazzini, Peter Maag, Giuseppe Patane, Michel Plasson, Georges Pretre, Nello Santi, and Hubert Soudant.  

Most recently, while continuing his personal opera and concert activities, he has devoted himself to the future of opera and young, gifted performers by teaching privately, stage directing opera productions throughout the world and by coaching singers in master classes, both in Italy and abroad. 
      `,
      galleryImages: [
        'assets/images/andreaElena.webp',
        'assets/images/andrea1.webp',
        'assets/images/andrea2.webp',
      ],
    },
    {
      name: 'Grant Norman',
      title: 'Broadway Star, Acting Teacher, and Stage Director',
      image: 'assets/images/grantNorman.webp',
      fullBiography: `Best known for his portrayal of the Phantom in the Broadway production of Andrew LLoyd Webber's Phantom of the Opera, Broadway star Grant Norman, himself a graduate of Central Florida Lyric Opera's Resident Artist Training Program, now returns to the company as Acting Teacher and Stage Director..

Grant Norman started out in theater with the Red River Dance & Performing Company in Fargo, ND.  He was a member of their company for 4 years, during which time he worked his way through the ranks to become a principal dancer.  During his 11 original productions with the company he was fortunate enough to work with its directors, Kathy & Eddie Gasper. Their experience and generosity proved to be invaluable to Grant.  Kathy was a successful classical ballerina and Eddie was a Broadway veteran and former Assistant to Bob Fosse. Under their tutelage he learned Tap, Jazz, Ballet and Character dancing. 

Grant Norman’s first starring role in musical theatre was with the Red River Dance & Performing Co. as “Paul” in Carnival; which happened to be a joint production between the Red River Dance & Performing Co. and The Fargo/Moorhead Community Theatre.  In the following years, Grant began working in many wonderful regional theatres throughout the country while returning to Fargo and the Red River Dance & Performing Co. to play “Tony” in West Side Story. 

Some of his most highly acclaimed regional roles included “Smudge” in Forever Plaid (Alley Theatre, TX), “Petruchio” in Taming of the Shrew, “Curley” in Oklahoma (Jupiter Theatre, FL), the “Prince/Wolf” in Into the Woods (Seaside Music Theatre, FL), “Max” in Lend Me a Tenor (Hippodrome Theatre, FL), “Gaston” in Gigi (Royal Palm Dinner Theatre, FL), “Johnny Canton” in 1940's Radio Hour (Ruth Foreman Theatre, FL), “Adam” in Seven Brides for Seven Brothers (Mark II Dinner Theatre, FL), “Corporal Billy Jester” in Little Mary Sunshine (North Dakota Repertory Theatre, ND), and “Sydney Carton” in A Tale of Two Cities (Backers Production, NYC).

In 1990, Grant Norman began his long-standing musical affiliation with Maestro Bill Doherty when he joined the Central Florida Lyric Opera’s Resident Artist Training Program.  As a member of the training program, Grant studied classical Italian opera singing with Mr. Doherty and also appeared in numerous concerts and opera programs with Bill Doherty and the Central Florida Lyric Opera. 

Grant moved to New York City in 1991 where he immediately joined the cast of two legendary Broadway shows - Miss Saigon and The Phantom of the Opera. “My time with The Phantom of the Opera on Broadway led to the opportunity to tour the U.S. as the Phantom in the National Touring Company. I then went on to play the Phantom in London at Her Majesty's Theatre.  After I returned to the States, I took some needed time off; and then accepted a contract, working for Disney, touring the U.S. and Canada as the “Beast” in Beauty and the Beast”, (a role for which he was nominated for two National Theatre Awards). “Although I loved touring our beautiful country, I was happy to be home again in New York.”  Once back in New York, he landed a role in the Off-Broadway production of Johnny Guitar where he can be found on the Original Cast Recording.

Most recently, Grant Norman finished a 2 1/2 year run playing the role of Gaston in the Broadway production of Disney's Beauty and the Beast and also appeared in the hit television drama “Law & Order”.
 
      `,
      galleryImages: [
        'assets/images/grant1.webp',
        'assets/images/grant2.webp',
        'assets/images/grant3.webp',
      ],
    },
    // ... Similar updates for Andrea Elena and Grant Norman
  ];
  pdfDocuments = [
    {
      name: 'Performers Handbook',
      url: 'assets/images/residenArtist.pdf',
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
  getBiographyParagraphs(biography: string): string[] {
    return biography.split('\n\n').map((para) => para.trim());
  }

  downloadPdf(url: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'document.pdf';
    link.click();
  }
}
