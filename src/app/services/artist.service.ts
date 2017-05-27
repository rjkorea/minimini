import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtistService {

  constructor(private http: Http) {}
  public getArtistOnly(params) {
    let url: string = `https://api.spotify.com/v1/artists/${params.id}?market=ES`;
    return this.http
           .get(url)
           .toPromise()
           .then(response => response.json())
           .catch();
  }

  public getArtistData() {
    let url: string = "https://api.spotify.com/v1/search?type=artist&q=rock&offset=20&limit=50";

    return this.http
               .get(url)
               .toPromise()
               .then(response => {
                return response.json() 
               })
               .catch();
  }
}
