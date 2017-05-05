import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

// import { Album } from './album';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: [ './artist.component.css' ],
  providers: [ArtistService]
})
export class ArtistComponent implements OnInit {
  artists;
  constructor(private artistService: ArtistService){}

  ngOnInit() {
    this.artistService.getArtistData()
    .then(data => {
      this.artists = data.artists;
    })

  }

}