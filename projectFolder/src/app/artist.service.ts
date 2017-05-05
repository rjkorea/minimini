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
    // var url = 'https://accounts.spotify.com/en/authorize?client_id=a7c4071c374d4c3ebd33893c9166cfca&redirect_uri=http:%2F%2Flocalhost:4200%2Fartist&scope=user-read-private%20user-read-email&response_type=token&callback=JSON_CALLBACK'
    let options = new RequestOptions({ headers: headers });
    var width = 450,
    height = 730,
    left = (screen.width / 2) - (width / 2),
    top = (screen.height / 2) - (height / 2);

    // window.addEventListener("message", function(event) {
    //   var hash = JSON.parse(event.data);
    //     if (hash.type == 'access_token') {
    //       console.log(hash.access_token);
    //     }
    // }, false);
    // window.open(url,
    //                         '_self',
    //                         'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
    //                        );
    
    // var token = window.location.toString().split('#access_token=')[1].split('&token_type')[0];
    // console.log(token)
    var url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"

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