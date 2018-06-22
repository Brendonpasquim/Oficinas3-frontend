import { Injectable } from '@angular/core';
import { PrincipalAtividade } from './principal-atividade';
import { AnaliseAtividade } from './analise-atividade';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AtividadeService {
  principaisAtividades: PrincipalAtividade[];
  analiseAtividades: AnaliseAtividade[];
  day = 86400000;
  month = 2592000000;

  constructor(private http: HttpClient) { }

  getPrincipais(periodo: String, user: any): Observable<any> {
  	let ended = this.getDate(-2*this.day);
  	let started = this.getDate(0);

  	let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/activity?';
  	
  	if(periodo == 'dia')
  		started = this.getDate(this.day);
  	else if(periodo == 'semana')
  		started = this.getDate(this.day*7);
  	else if(periodo == 'mes')
  		started = this.getDate(this.month);
  	else if(periodo == 'semestre')
  		started = this.getDate(this.month*6);
  	else if(periodo == 'ano')
  		started = this.getDate(this.month*12);

  	url = url + 'started='+started+'&ended='+ended;

    return this.http.get<any>(url, {'headers': {"Authorization": "Basic " + btoa(user.name+":"+user.password)}});
  }


  getAtividades2(periodo: string){
  	
  	let started1 = '';
  	let started2 = '';
  	let started3 = '';
  	let ended1 = '';
  	let ended2 = '';
  	let ended3 = this.getDate(-2*this.day);

  	let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/activity?';

  	if(periodo == 'mes'){
  		started1 = this.getDate(this.day*29);
  		ended1 = this.getDate(this.day*20);
  		started2 = this.getDate(this.day*19);
  		ended2 = this.getDate(this.day*10);
  		started3 = this.getDate(this.day*9);
  	}
  	else if(periodo == 'semestre'){
  		started1 = this.getDate(this.month*6);
  		ended1 = this.getDate(this.month*4 + this.day);
  		started2 = this.getDate(this.month*4);
  		ended2 = this.getDate(this.month*2 + this.day);
  		started3 = this.getDate(this.month*2);
  	}
  	if(periodo == 'ano'){
  		started1 = this.getDate(this.month*12);
  		ended1 = this.getDate(this.month*8 + this.day);
  		started2 = this.getDate(this.month*8);
  		ended2 = this.getDate(this.month*4 + this.day);
  		started3 = this.getDate(this.month*4);
  	}
  	
  	url = url + 'started1='+started1+'&ended1='+ended1+ '&started2='+started2+'&ended2='+ended2+ '&started3='+started3+'&ended3='+ended3;

    return this.http.get<any>(url, {'headers': {"Authorization": "Basic " + btoa("cassol:oficinas3")}});
  }

  getDate(offset: number){
  	const today: number = Date.now() - offset;

  	const options = {
      timezone: 'UTC-3',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    let date = new Date(today).toLocaleDateString('zh-Hans-CN',options);
    var re = "/"; 
	date = date.replace(re, "-").replace(re,"-"); 
    return date;
  }

deleteAtividade(atividade:string, user:any): Observable<any> {
    let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/activity/' + atividade;
    return this.http.delete<any>(url, {'headers': {"Authorization": "Basic " + btoa(user.name+":"+user.password)}});
}

getAll(user: any){
  let url = 'http://smartpomodoro-backend2-smartpomodoro.1d35.starter-us-east-1.openshiftapps.com/api/activitylist';
  return this.http.get<any>(url, {'headers': {"Authorization": "Basic " + btoa(user.name+":"+user.password)}});
}
 

}
