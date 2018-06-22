import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  public isAuthenticated = false;

	private user = {
		name: '',
		password: ''
	};

  constructor(private http: HttpClient, private router: Router) { 
    let test = JSON.parse(localStorage.getItem('user'));
    this.checkAuth(test).subscribe(data => {
      if(data.message == 'Authorized Access'){
        this.user = JSON.parse(localStorage.getItem('user'));
        this.isAuthenticated = true;
        this.router.navigate(['/home']);
      }
    });
  }

  getUser(){
  	return this.user;
  }

  setUser(user: any){
  	this.user = user;
    localStorage.setItem('user',JSON.stringify(this.user));
  }

  checkAuth(user: any){
    let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/login';
    return this.http.get<any>(url, {'headers': {"Authorization": "Basic " + btoa(user.name+":"+user.password)}});
  }

}
