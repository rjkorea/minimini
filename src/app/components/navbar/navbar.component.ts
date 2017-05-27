import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ],
})
export class NavbarComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    let userAgent = navigator.userAgent;
    if(userAgent.toLowerCase().indexOf('mobile') < 0) {
      console.log('desktop');
    } else {
      console.log('mobile');
    }
  }

  public myFunction(): void {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
}
