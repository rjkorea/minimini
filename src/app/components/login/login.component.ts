import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { LoginService } from '../../services//login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService){}

  ngOnInit() {

  }

}
