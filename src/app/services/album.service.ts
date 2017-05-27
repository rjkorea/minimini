import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService {

  constructor(private http: Http) {}

  public getAlbumOnly(params) {
    let url: string = `https://api.spotify.com/v1/albums/${params.id}?market=ES`;
    return this.http
           .get(url)
           .toPromise()
           .then(response => response.json())
           .catch();
  }

  public getAlbumData() {
    let url: string = "https://api.spotify.com/v1/search?type=album&q=rock&offset=20&limit=50";
    return this.http
               .get(url)
               .toPromise()
               .then(response => response.json())
               .catch();
  }
}
