import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  resultados = [];
  resultadosSort = [];
  nomeLiga = {
    id:Number,
    name:String
  };
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


  ID_Liga:number;

  ngOnInit(): void {

    //Enrotamento de Liga
    this.rotaLiga.params.subscribe(params => {
      this.ID_Liga = parseInt(params['idLiga']); 
      
      
       //GET CLUBES ADAPTADO PARA ORDENAR DOS DADOS (SORT) E CONSEGUIR ATRIBUIR VALORES DE POSIÇÃO DINÂMICOS COMPATIVÉIS COM O FORM DE PESQUISA
       this.FutebolServ.getClubesAll (this.ID_Liga)
       .subscribe (resultados => {
         this.resultadosSort = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined
 
         //funçao de ordenamento melhorada!:
         this.resultadosSort.sort((a, b) => b.pontos - a.pontos || b.saldoGols - a.saldoGols);
       })
 
 
       this.FutebolServ.getLiga(this.ID_Liga)
       .subscribe (nomeLiga =>{
         this.nomeLiga = nomeLiga ['Liga']
       })
 
     });
 
     this.mostrarAlert();
 
   }
   

  mostrarAlert() {
    this.rotaLiga.queryParams.subscribe(params => {
      this.urlEliminado = params ['sucessoeliminado']
      this.urlAdd = params ['sucessoadicionado']
      
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
    })
  }

  editLiga(ID_Liga) {
    location.href='http://localhost:4200/liga/'+ID_Liga+'/editliga'
  }
  
  // voltar() {   
  //     window.history.back()
  //   }
 
}