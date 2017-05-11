import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumService {

  constructor(private http: Http) {}

  getAlbumOnly(params) {
    let url = `https://api.spotify.com/v1/albums/${params.id}?market=ES`;
    return this.http
           .get(url)
           .toPromise()
           .then(response => response.json())
           .catch();
  }

  getAlbumData() {
    let url = "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES";
    return this.http
               .get(url)
               .toPromise()
               .then(response => response.json())
               .catch();
  }
}
