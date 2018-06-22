import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfiguracaoService {

  constructor(private http: HttpClient) { }

  putVoz(flag:boolean,user: any){
  	let useSpeech = 'false';
  	if(flag)
  		useSpeech = 'true';

  	let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/userfield/useSpeech';
    return this.http.put<any>(url, useSpeech, {'headers': {"Authorization": "Basic " + btoa(user.name+":"+user.password), 'Content-Type': 'application/json'}});
  }

  getFaces(user: any){
  	let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/userfield/faces';
    return this.http.get<any>(url, {'headers': {"Authorization": "Basic " + btoa(user.name+":"+user.password), 'Content-Type': 'application/json'}});
  }

  putFace(body: any,user: any){
  	let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/userfield/faces';
    return this.http.put<any>(url, JSON.stringify(body), {'headers': {"Authorization": "Basic " + btoa(user.name+":"+user.password), 'Content-Type': 'application/json'}});
  }



}
