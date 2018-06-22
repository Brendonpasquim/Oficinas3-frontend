import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AnaliseComponent } from './analise/analise.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { PrincipaisAtividadesComponent } from './principais-atividades/principais-atividades.component';
import { TablePrincipaisComponent } from './table-principais/table-principais.component';
import { TableAnaliseComponent } from './table-analise/table-analise.component';

import { AtividadeService } from './atividade.service';
import { ChartsModule } from 'ng2-charts';
import { ChartPrincipaisComponent } from './chart-principais/chart-principais.component';
import { ChartAnaliseComponent } from './chart-analise/chart-analise.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule }    from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ConfiguracaoService } from './configuracao.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnaliseComponent,
    ConfiguracoesComponent,
    PrincipaisAtividadesComponent,
    TablePrincipaisComponent,
    TableAnaliseComponent,
    ChartPrincipaisComponent,
    ChartAnaliseComponent,
    ChartPieComponent,
    ChartBarComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [AtividadeService, AuthenticationService, ConfiguracaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
