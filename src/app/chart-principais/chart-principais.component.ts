import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { PrincipalAtividade } from '../principal-atividade';

@Component({
  selector: 'app-chart-principais',
  templateUrl: './chart-principais.component.html',
  styleUrls: ['./chart-principais.component.css']
})
export class ChartPrincipaisComponent implements OnInit {

  @Input() atividades: PrincipalAtividade[];	

  public lineChartData:Array<any> = new Array();

  public lineChartLabels:Array<any> = ['Total (Horas)'];

  public lineChartOptions:any = {
	    responsive: true,
	    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  };

  public lineChartColors:Array<any> = [
	    { // grey
	      backgroundColor: 'rgba(97,47,116,0.5)',
	      borderColor: 'rgba(97,47,116,1)'
	    },
	    { // dark grey
	      backgroundColor: 'rgba(255, 255, 102,0.5)',
	      borderColor: 'rgba(255, 255, 102,1)'
	    },
	    { // grey
	      backgroundColor: 'rgba(148,159,177,0.2)',
	      borderColor: 'rgba(148,159,177,1)',
	      pointBackgroundColor: 'rgba(148,159,177,1)',
	      pointBorderColor: '#fff',
	      pointHoverBackgroundColor: '#fff',
	      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	    }
  ];

  public lineChartLegend:boolean = true;

  public lineChartType:string = 'bar';

  constructor() { }

  ngOnInit() {
  	this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges){
  	this.updateChart();
  }

  updateChart(){
      this.lineChartData.splice(0);
      for (let i = 0; i < this.atividades.length && i < 3 ; i++) {
        this.lineChartData.push({data: [this.atividades[i].time/3600000], label: this.atividades[i].name});
      }

  }
}
