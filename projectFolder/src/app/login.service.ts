import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';

import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http, private jsonp: Jsonp) {}

  getAuthData() {
    let ID = 'a7c4071c374d4c3ebd33893c9166cfca';
    let secret = 'b735737cca2c48fd98efab54e254273f';
    var REDIRECT_URI = 'http://localhost:4200/artist';
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/rdf+xml');
    headers.append('Accept', 'application/sparql-results+json');
    var url = 'https://accounts.spotify.com/en/authorize?client_id=a7c4071c374d4c3ebd33893c9166cfca&redirect_uri=http:%2F%2Flocalhost:4200%2Fartist&scope=user-read-private%20user-read-email&response_type=token&callback=JSON_CALLBACK'
    let options = new RequestOptions({ headers: headers });
    console.log(url)
            var width = 450,
            height = 730,
            left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);

             window.addEventListener("message", function(event) {
            var hash = JSON.parse(event.data);
            if (hash.type == 'access_token') {
                console.log(hash.access_token);
            }
        }, false);
    var w = window.open(url, '_self', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                           );
    console.log(window.location)

    // return this.http
    //            .get(url, options)
    //            .toPromise()
    //            .then(response => console.log(response.json().data))
    //            .catch();
  }

  // search(term: string): Observable<Album[]> {
  //   return this.http
  //              .get(`https://api.spotify.com/v1/albums`)
  //              .map(response => response.json().data as Album[]);
  // }
}