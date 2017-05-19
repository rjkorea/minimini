import { Component, OnInit } from '@angular/core';

import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: [ './artist.component.css' ],
  providers: [ArtistService]
})
export class ArtistComponent implements OnInit {
  private artists: any[];
  private counter: number = 0;
  private loader: boolean = false;
  private items: any[];

  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistService.getArtistData()
    .then(data => {
      this.artists = data.artists.items;
      this.items = this.artists.slice(0, 5);
    });
  }

  onScroll($event: Event): void {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      let that = this;
      if(this.counter < this.artists.length) {
        this.loader = true;
        setTimeout(() => {
          let getData = that.artists.slice(that.counter, that.counter + 5);
          for(let i = 0; i < getData.length; i++) {
            that.items.push(getData[i]);
          }
          that.counter += 5;
          that.loader = false;
        }, 1000);
      } 
    }
  }
}
