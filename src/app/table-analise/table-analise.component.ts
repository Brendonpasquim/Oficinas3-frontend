import { Component, OnInit, Input } from '@angular/core';
import { AnaliseAtividade } from '../analise-atividade';

@Component({
  selector: 'app-table-analise',
  templateUrl: './table-analise.component.html',
  styleUrls: ['./table-analise.component.css']
})
export class TableAnaliseComponent implements OnInit {
  @Input() atividades: AnaliseAtividade[];	
  @Input() periodo: string;
  @Input() tipo: string;
  @Input() labels: Array<number>;
  today: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
