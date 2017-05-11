import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';

import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: [ './album-detail.component.css' ],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  show = false;
  album;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.route.params
      .subscribe(data => this.albumService.getAlbumOnly(data)
        .then(albumData => {
          this.album = albumData
          this.show = true;
        }))

  }

}
