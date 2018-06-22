import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	private user: any;
  private username = '';
  	
  	constructor(private authenticationService: AuthenticationService, router: Router) {
  		router.events.subscribe((val) => {
       		this.user = this.authenticationService.getUser();
           this.username = this.user.name
    	});
  	 }

  ngOnInit() {
  	
  }

}
