import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumService {

  constructor(private http: Http) {}

  getAlbumOnly(params) {
    let url = `https://api.spotify.com/v1/albums/${params.id}?market=ES`
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

  getAlbumData() {
    // let ID = 'a7c4071c374d4c3ebd33893c9166cfca';
    // let secret = 'b735737cca2c48fd98efab54e254273f';
    // var REDIRECT_URI = 'http://localhost:4200/artist';
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/rdf+xml');
    headers.append('Accept', 'application/sparql-results+json');
    var url = "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES"
    let options = new RequestOptions({ headers: headers });
    // console.log(url)
    //         var width = 450,
    //         height = 730,
    //         left = (screen.width / 2) - (width / 2),
    //         top = (screen.height / 2) - (height / 2);

    //          window.addEventListener("message", function(event) {
    //         var hash = JSON.parse(event.data);
    //         if (hash.type == 'access_token') {
    //             console.log(hash.access_token);
    //         }
    //     }, false);
    // window.open(url,
    //                         '_self',
    //                         'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
    //                        );
    // console.log(window.location.toString().split('token='))
    // return this.jsonp.request(url, options)
    //  .subscribe((res) => {
    //    console.log('resres', res)
    //  });
    return this.http
               .get(url, options)
               .toPromise()
               .then(response => response.json())
               .catch();
  }

  // search(term: string): Observable<Album[]> {
  //   return this.http
  //              .get(`https://api.spotify.com/v1/albums`)
  //              .map(response => response.json().data as Album[]);
  // }
}