import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: [ './artist.component.css' ],
  providers: [ArtistService]
})
export class ArtistComponent implements OnInit {
  artists;
  counter: number = 0;
  loader: boolean = false;
  items: any;

  constructor(private artistService: ArtistService){}

  ngOnInit() {
    this.artistService.getArtistData()
    .then(data => {
      this.artists = data.artists.items;
      this.items = this.artists.slice(0, 5);
    });
  }

  onScroll($event: Event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      let that = this;
      if(this.counter < this.artists.length) {console.log(1)
        this.loader = true;
        setTimeout(() => {
          let getData = that.artists.slice(that.counter, that.counter + 5);
          for(let i = 0; i < getData.length; i++){
            that.items.push(getData[i]);
          }
          that.counter += 5;
          that.loader = false;
        }, 1000);
      } 
    }
  }

}
