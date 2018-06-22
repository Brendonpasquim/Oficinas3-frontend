import { Component, OnInit } from '@angular/core';
import { PrincipalAtividade } from '../principal-atividade';
import { AtividadeService } from '../atividade.service';
import { AuthenticationService } from '../authentication.service';
import { ConfiguracaoService } from '../configuracao.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

	private atividade = '';
	private excluirAtividade = false;
	private comandoVoz: false;
	private user: any;
	private activities = [''];
	private isLoaded = false;
  private faces = ['','','','','','',''];

  constructor(
  	private atividadeService: AtividadeService, 
  	private authenticationService: AuthenticationService,
  	private configuracaoService: ConfiguracaoService

  	) { }

  ngOnInit() {
  	this.user = this.authenticationService.getUser();
  	this.getActivities();
    this.getFaces();
  }

  onSubmit(){
  	if(this.excluirAtividade){
  		this.atividadeService.deleteAtividade(this.atividade,this.user).subscribe(data => {
        console.dir(data);
  		});
  	}

  	this.configuracaoService.putVoz(this.comandoVoz,this.user).subscribe(data => {
      console.dir(data);
  	});

  }

  getActivities(){
  	
  	this.atividadeService.getAll(this.user).subscribe(data => {
  		
  		this.activities = data.activities;
  		this.isLoaded = true;
  	});
  }

  getFaces(){
    this.configuracaoService.getFaces(this.user).subscribe(data => {
      this.faces = data;
    });
  }

  putFace(index: number){
    let body: any;
    
    if(index == 0) body = {'0' : this.faces[0]};
    else if(index == 1) body = {'1' : this.faces[1]};
    else if(index == 2) body = {'2' : this.faces[2]};
    else if(index == 3) body = {'3' : this.faces[3]};
    else if(index == 4) body = {'4' : this.faces[4]};

    this.configuracaoService.putFace(body,this.user).subscribe(data => {
      console.dir(data);
    });
  }

}
