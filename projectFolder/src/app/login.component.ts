import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  albums;
  constructor(private loginService: LoginService){}

  ngOnInit() {
    this.loginService.getAuthData()

  }

}