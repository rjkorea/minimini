import { Component, OnInit } from '@angular/core';

import { AlbumService } from '../../services//album.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: [ './album.component.css' ],
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {
  private albums;
  private counter: number = 0;
  private items: any[];
  private loader: boolean = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbumData()
      .then(data => {
        this.albums = data.albums.items;
        this.items = this.albums.slice(0, 5);
      });
  }

  onScroll($event: Event): void {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      let that = this;
      if(this.counter < this.albums.length) {
        this.loader = true;
        setTimeout(() => {
          let getData = that.albums.slice(that.counter, that.counter + 5);
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
