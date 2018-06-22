import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { AnaliseAtividade} from '../analise-atividade';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit {
  @Input() atividades: AnaliseAtividade[];

  public pieChartLabels:Array<any>= new Array;
  public pieChartData:number[];
  public pieChartType:string = 'pie';
  public pieChartOptions = {legend: {display: true}};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
  	if(this.atividades != null)
  		this.updateChart();
  }

  updateChart(){
  	let _chartData:Array<number> = new Array(this.atividades.length);
  	let _chartLabels:Array<string> = new Array(this.atividades.length);
    //if(this.pieChartLabels.length > 0)
      this.pieChartLabels.splice(0);
  	  for (let i = 0; i < this.atividades.length; i++) {
        this.pieChartLabels.push(this.atividades[i].name);
        _chartData[i] = +this.atividades[i].value1;  
	    }

	  //this.pieChartLabels = _chartLabels;
    this.pieChartData = _chartData;
	  console.log(this.pieChartLabels);

  }

}
