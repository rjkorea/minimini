import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  getSearchData(word) {
    let url = `https://api.spotify.com/v1/search/?q=${word}&type=track,artist&market=US`;
    return this.http
           .get(url)
           .toPromise()
           .then(response => {
             return response.json();
           })
           .catch();
  }

  getNextData(url) {
    return this.http
           .get(url)
           .toPromise()
           .then(response => {
             return response.json();
           });
  }

    getPrevData(url) {
    return this.http
           .get(url)
           .toPromise()
           .then(response => {
             return response.json();
           });
  }
}
