import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isAuthenticated = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if(!this.authenticationService.isAuthenticated)
      this.router.navigate(['/login']);
    else
      this.isAuthenticated = this.authenticationService.isAuthenticated;
  
  }

}
