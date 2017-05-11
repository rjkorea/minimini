import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  getSearchData(word) {
    let url = `https://api.spotify.com/v1/search/?q=${word}&type=track,artist&market=US`
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
}