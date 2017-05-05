import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

// import { Album } from './album';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: [ './artist-detail.component.css' ],
  providers: [ArtistService]
})
export class ArtistDetailComponent implements OnInit {
  artists;
  constructor(private artistService: ArtistService){}

  ngOnInit() {
    // this.artistService.getArtistData()
    // .then(data => {
    //   this.artists = data.artists;
    // })

  }

}