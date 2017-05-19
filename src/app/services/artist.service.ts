import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtistService {

  constructor(private http: Http) {}
  getArtistOnly(params) {
    let url = `https://api.spotify.com/v1/artists/${params.id}?market=ES`;
    return this.http
           .get(url)
           .toPromise()
           .then(response => response.json())
           .catch();
  }

  getArtistData() {
    let url = "https://api.spotify.com/v1/search?type=artist&q=rock&offset=20&limit=50";

    return this.http
               .get(url)
               .toPromise()
               .then(response => {
                return response.json() 
               })
               .catch();
  }
}
