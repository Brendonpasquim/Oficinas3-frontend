import { Component, OnInit, Input } from '@angular/core';
import { PrincipalAtividade } from '../principal-atividade';


@Component({
  selector: 'app-table-principais',
  templateUrl: './table-principais.component.html',
  styleUrls: ['./table-principais.component.css']
})
export class TablePrincipaisComponent implements OnInit {

  @Input() atividades: PrincipalAtividade[];

  constructor() { }

  ngOnInit() {
  }

}
