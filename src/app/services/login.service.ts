import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  getAuthData() {
    let clientID = '';
    let secret = '';
    let REDIRECT_URI = 'http://localhost:4200/album';
    let width = 450;
    let height = 730;
    let left = (screen.width / 2) - (width / 2);
    let top = (screen.height / 2) - (height / 2);
    let url = `https://accounts.spotify.com/authorize/?client_id=${clientID}&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`;
    
    window.open(url, '_self', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    return this.http
       .get(url)
       .toPromise()
       .then(response => {
         return response.json();
       })
       .catch();
  }
}
