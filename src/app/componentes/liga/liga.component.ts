import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  resultados = [];
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

  ngOnInit(): void {

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined      
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
    location.href="http://localhost:4200/editliga"
  }

  
}