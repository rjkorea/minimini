import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Injectable()
export class SearchService {
  
  constructor(private http: Http) {}

  getSearchData(word) {
    let url: string = `https://api.spotify.com/v1/search/?q=${word}&type=track,artist&market=US`;
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

  getNextMore(offset) {
    let count: number = offset + 100;
    let uri: string = `https://api.spotify.com/v1/search?query=m&type=artist&market=US&offset=${count}&limit=20`;
    
    console.log(uri);
    return this.http
           .get(uri)
           .toPromise()
           .then(response => {
             return response.json();
           });
  }

  getPrevMore(offset) {console.log(offset)
    let count: number = offset - 100;
    let uri: string = `https://api.spotify.com/v1/search?query=m&type=artist&market=US&offset=${count}&limit=20`;
    
    return this.http
           .get(uri)
           .toPromise()
           .then(response => {
             return response.json();
           });
  }
}
