import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';

import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: [ './artist-detail.component.css' ],
  providers: [ArtistService]
})
export class ArtistDetailComponent implements OnInit {
  private show: boolean = false;
  private artist: any[];
  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.route.params
      .subscribe(data => this.artistService.getArtistOnly(data)
        .then(artistData => {
          this.artist = artistData;
          this.show = true;
        }));
  }
}
