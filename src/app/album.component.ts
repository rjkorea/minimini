import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { AlbumService } from './album.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: [ './album.component.css' ],
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {
  albums;
  constructor(private albumService: AlbumService){}

  ngOnInit() {
    this.albumService.getAlbumData()
      .then(data => {
        this.albums = data.albums;
      })
  }

}