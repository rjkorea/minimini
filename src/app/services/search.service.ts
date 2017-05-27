import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  
  constructor(private http: Http) {}

  public getSearchData(word: string) {
    let url: string = `https://api.spotify.com/v1/search/?q=${word}&type=track,artist&market=US`;
    return this.http
           .get(url)
           .toPromise()
           .then(response => response.json())
           .catch();
  }

  public getNextData(url: string) {
    return this.http
           .get(url)
           .toPromise()
           .then(response => response.json());
  }

  public getPrevData(url: string) {
    return this.http
           .get(url)
           .toPromise()
           .then(response => response.json());
  }

  public getNextMore(offset: number) {
    let count: number = offset + 100;
    let uri: string = `https://api.spotify.com/v1/search?query=m&type=artist&market=US&offset=${count}&limit=20`;
    
    return this.http
           .get(uri)
           .toPromise()
           .then(response => response.json());
  }

  public getPrevMore(offset: number) {
    let count: number = offset - 100;
    let uri: string = `https://api.spotify.com/v1/search?query=m&type=artist&market=US&offset=${count}&limit=20`;
    
    return this.http
           .get(uri)
           .toPromise()
           .then(response => response.json());
  }
}
