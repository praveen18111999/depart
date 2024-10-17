import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  showHeaderFooter: boolean = true;

  constructor(private router: Router,private cookieService: CookieService) {
    this.router.events.subscribe(() => {
      if(this.showHeaderFooter) {
        this.showHeaderFooter = this.router.url !== '/login';
      }
    });
  }


  ngOnInit(): void {

  }

 

}
