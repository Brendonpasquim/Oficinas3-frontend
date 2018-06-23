import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private user = {
		name: '',
		password: '',
	};

	public username= '';
 	public password= '';
 	public isValid = false;
  public rejected = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    this.user = this.authenticationService.getUser();
    this.username = this.user.name;
    this.password = this.user.password;
  }

  ngOnInit() {
    this.rejected = false;
    this.onChange();
  }

  onSubmit(){
  	this.user.name = this.username;
  	this.user.password = this.password;
    this.authenticationService.checkAuth(this.user).subscribe(data => {
      if(data.message == 'Authorized Access'){
        this.authenticationService.setUser(this.user);
        this.authenticationService.isAuthenticated = true;
        this.router.navigate(['/home']);
      }
      else{
        this.rejected = true;
      }
    },
    err => {
      this.rejected = true;
    });
  }

  onChange(){
  	if(this.username == '' || this.password == '')
  		this.isValid = false;
  	else
  		this.isValid = true;
  }

}
