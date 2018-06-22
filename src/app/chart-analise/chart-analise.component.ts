import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { AnaliseAtividade} from '../analise-atividade';


@Component({
  selector: 'app-chart-analise',
  templateUrl: './chart-analise.component.html',
  styleUrls: ['./chart-analise.component.css']
})
export class ChartAnaliseComponent implements OnInit {

  @Input() atividades: AnaliseAtividade[];
  @Input() tipo: string;
  @Input() periodo: string;
  @Input() labels: Array<any>;

  public chartData:Array<any> = new Array;

  public chartLabels:Array<any>;

  public chartOptions:any = {
	    responsive: true,
	    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };
  public chartLegend:boolean = true;

  public chartType:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
  	if(this.atividades != null)
  		this.updateChart();
  	this.chartType = 'line';
  }

  updateChart(){
    this.processLabels();

  	  let _chartData:Array<any> = new Array(this.atividades.length);

      this.chartData.splice(0);
      if(this.tipo != 'progressao-p'){
        for (let i = 0; i < this.atividades.length && i < 5 ; i++) {
          this.chartData.push({data: [this.atividades[i].value1/3600000,this.atividades[i].value2/3600000,this.atividades[i].value3/3600000], label: this.atividades[i].name});
        }
      }
      else{
          for (let i = 0; i < this.atividades.length && i < 5 ; i++) {
          this.chartData.push({data: [this.atividades[i].value1,this.atividades[i].value2,this.atividades[i].value3], label: this.atividades[i].name});
        }
      }
      
  }

  processLabels(){
    this.labels = this.labels.map(function(l){
      const options = {
        timezone: 'UTC-3',
        month: '2-digit',
        day: '2-digit',
      };
      return new Date(+l).toLocaleDateString('pt-BR',options);
    });
    let aux = new Array<string>();
    aux.push(this.labels[0] + ' a ' + this.labels[1]);
    aux.push(this.labels[2] + ' a ' + this.labels[3]);
    aux.push(this.labels[4] + ' a ' + this.labels[5]);
    this.chartLabels = aux;
    
  }   

}
