import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

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
    let url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6";

    return this.http
               .get(url)
               .toPromise()
               .then(response => {
                return response.json() 
               })
               .catch();
  }
}
