import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {

  constructor(private http: Http) {}
  getArtistOnly(params) {
    let url = `https://api.spotify.com/v1/artists/${params.id}?market=ES`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/rdf+xml');
    headers.append('Accept', 'application/sparql-results+json');
    let options = new RequestOptions({ headers: headers });

    return this.http
           .get(url, options)
           .toPromise()
           .then(response => response.json())
           .catch();
  }

  getArtistData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/rdf+xml');
    headers.append('Accept', 'application/sparql-results+json');
    
    let options = new RequestOptions({ headers: headers });
    let url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"

    return this.http
               .get(url, options)
               .toPromise()
               .then(response => {
                console.log(response.json())
                return response.json() 
               })
               .catch();
  }

}