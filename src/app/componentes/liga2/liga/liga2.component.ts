import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liga2',
  templateUrl: './liga2.component.html',
  styleUrls: ['./liga2.component.css']
})
export class Liga2Component implements OnInit {

  resultados = [];
  resultadosSort = [];
  nomeLigas = [{
    name:String
  }];
  pesquisa:string; //Para o formulario de pesquisa
  index:number

  //ALERT ELIMINADO Y ADICIONADO
  urlEliminado;
  alertEliminado;
  mensajeAlertEliminado;
  urlAdd;
  alertAdd;
  mensajeAlertAdd = '';

  constructor(private FutebolServ: FutebolService, private rotaLiga: ActivatedRoute) { }

  // PARA EDITAR CLUB
  ID: any;
  name: string;
  urlShield: string;
  country: string;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;

  ngOnInit(): void {

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

    //GET CLUBES ADAPTADO PARA ORDENAR DOS DADOS (SORT) E CONSEGUIR ATRIBUIR VALORES DE POSIÇÃO DINÂMICOS COMPATIVÉIS COM O FORM DE PESQUISA
    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined     
      this.resultadosSort = this.resultados.sort(function (a, b) {
        if ( a.pontos < b.pontos) {
          return 1;
        }
        if (a.saldoGols > b. saldoGols || a.pontos > b.pontos ) {
          return -1;
        }
        // a igual que b
        return 0;
      });
      // console.log(this.resultadosSort)    
    })


    this.mostrarAlert();

  }

  mostrarAlert() {
    this.rotaLiga.queryParams.subscribe(params => {
      this.urlEliminado = params ['sucessoeliminado']
      this.urlAdd = params ['sucessoadd']
      
      if (this.urlEliminado == 'ok') {
        this.alertEliminado = true
        this.mensajeAlertEliminado = 'O clube foi eliminado!'

        setTimeout(()=>{                           
          this.alertEliminado = false;
        }, 4000);
      } else if (this.urlAdd == 'ok') {
        this.alertAdd = true
        this.mensajeAlertAdd = 'O clube foi adicionado'

        setTimeout(()=>{                           
          this.alertAdd = false;
        }, 4000);
      } else {
        this.alertAdd = false;
        this.alertEliminado = false;
      }
              
      // console.log(this.alertAdd + 'adicionado', this.alertEliminado + 'eliminado')
    })
  }
  editLiga() {
    location.href="http://localhost:4200/liga2/editliga2"
  }
  
}