import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title: string = 'MINIMINI MUSIC : )';
  ngOnInit() {
    let userAgent = navigator.userAgent;
    if(userAgent.toLowerCase().indexOf('mobile') < 0) {
      console.log('desktop');
      // this.router.navigate(['/pagenotfound']);
    } else {
      console.log('mobile');
    }
  }
}
