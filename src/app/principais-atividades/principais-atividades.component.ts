import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { PrincipalAtividade } from '../principal-atividade';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-principais-atividades',
  templateUrl: './principais-atividades.component.html',
  styleUrls: ['./principais-atividades.component.css']
})
export class PrincipaisAtividadesComponent implements OnInit {
  model = "dia";
  atividades: PrincipalAtividade[] = null;
  isLoaded = false;

  constructor(private atividadeService: AtividadeService, private authenticationService: AuthenticationService) { 
  }

  ngOnInit() {
    this.getAtividades(this.model);
  }

  onSelect(periodo: string){
  	this.getAtividades(periodo);
  }

  getAtividades(periodo: string): void {
    this.isLoaded = false;
  	this.atividadeService.getPrincipais(periodo,this.authenticationService.getUser()).subscribe(data => {
      let atividades = new Array<PrincipalAtividade>();
      data.forEach((d) => {
        atividades.push({
          'id': 0,
          'name': d['_id'],
          'time': +(d.sum)*1000
        });      
      });

      this.atividades = atividades.sort((n1,n2) => n2.time - n1.time);
      this.isLoaded = true;
    });
  }

}
