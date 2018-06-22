import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { AnaliseAtividade} from '../analise-atividade';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {
  analiseAtividades: AnaliseAtividade[];
  tipo: string = '';
  periodo: string = '';
  labels: Array<number>;
  isLoaded = false;


  constructor(private atividadeService: AtividadeService, private authenticationService: AuthenticationService) { 
  }

  ngOnInit() {
  	this.tipo='todas-atividades';
    this.periodo='ano';
    this.updateLabels();
    this.getAtividades(this.tipo,this.periodo);
  }

  getAtividades(tipo: string, periodo: string){
    this.isLoaded = false;
    
    if(this.tipo == 'todas-atividades'){
      this.atividadeService.getPrincipais(periodo, this.authenticationService.getUser()).subscribe(data => {
        let atividades = new Array<AnaliseAtividade>();

        data.forEach((d) => {
          atividades.push({
            'id': 0,
            'name': d['_id'],
            'value1': +((d.sum)/3600).toFixed(2),
            'value2': 0,
            'value3': 0
          });      
        });

        this.analiseAtividades = atividades.sort((n1,n2) => n2.value1 - n1.value1);

        this.isLoaded = true;
      });
    }
    else if(this.tipo == 'progressao' || this.tipo == 'progressao-p'){
      this.atividadeService.getAtividades2(periodo).subscribe(data => {
        let atividades = new Array<AnaliseAtividade>();
        data.forEach((d) => {
          if(d.sum1 == null) d.sum1 = 0;
          if(d.sum2 == null) d.sum2 = 0;
          if(d.sum3 == null) d.sum3 = 0;

          if(this.tipo == 'progressao'){
            atividades.push({
              'id': 0,
              'name': d['_id'],
              'value1': +d.sum1*1000,
              'value2': +d.sum2*1000,
              'value3': +d.sum3*1000
            }); 
          }
          else{
            atividades.push({
              'id': 0,
              'name': d['_id'],
              'value1': +(d.sum1/(d.sum1+d.sum2+d.sum3)).toFixed(4),
              'value2': +(d.sum2/(d.sum1+d.sum2+d.sum3)).toFixed(4),
              'value3': +(d.sum3/(d.sum1+d.sum2+d.sum3)).toFixed(4)
            }); 
          }

               
        });

        this.analiseAtividades = atividades.sort((n1,n2) => n2.value3 - n1.value3);

        this.isLoaded = true;
      });
    }
    else if(this.tipo == 'media-diaria'){
      this.atividadeService.getAtividades2(periodo).subscribe(data => {
        let atividades = new Array<AnaliseAtividade>();

        data.forEach((d) => {
          if(d.sum1 == null) d.sum1 = 0;
          if(d.sum2 == null) d.sum2 = 0;
          if(d.sum3 == null) d.sum3 = 0;

          let dias: number;
          if(this.periodo == 'mes')
            dias = 10;
          else if(this.periodo == 'semestre')
            dias = 60;
          else if(this.periodo == 'ano')
            dias = 120;

            atividades.push({
              'id': 0,
              'name': d['_id'],
              'value1': +(d.sum1*1000)/dias,
              'value2': +(d.sum2*1000)/dias,
              'value3': +(d.sum3*1000)/dias
            }); 
               
        });

        this.analiseAtividades = atividades.sort((n1,n2) => +n2.value3 - +n1.value3);
        this.isLoaded = true;
      });
    }
    
  	
  }

  calculaPorcentagens(){

  }

  onSelectTipo(tipo: string){
  	this.getAtividades(tipo,this.periodo);
  }

  onSelectPeriodo(periodo: string){
  	this.getAtividades(this.tipo,periodo);
    this.updateLabels();
  }

  updateLabels(){
    const today: number = Date.now();
    
    const day = 86400000;
    const month = 2592000000;

    if(this.periodo == 'semana'){
      this.labels = [
        today -8*day,
        today -6*day,
        today -5*day,
        today -3*day,
        today -2*day,
        today
      ];
    }
    else if(this.periodo == 'mes'){
      this.labels = [
        today -29*day,
        today -20*day,
        today -19*day,
        today -10*day,
        today -9*day,
        today
      ];
    }
    else if(this.periodo == 'semestre'){
      this.labels = [
        today -6*month,
        today -4*month - day,
        today -4*month,
        today -2*month - day,
        today -2*month,
        today
      ];
    }
    else if(this.periodo == 'ano'){
      this.labels = [
        today -12*month,
        today -8*month -day,
        today -8*month,
        today -4*month -day,
        today -4*month,
        today 
      ];
    }
  }

}
