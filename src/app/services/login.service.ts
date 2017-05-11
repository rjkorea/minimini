import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  getAuthData() {}
}
