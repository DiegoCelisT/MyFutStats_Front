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
  nomeLigas = [];
  pesquisa:string; //Para o formulario de pesquisa
  index:number

  urlEliminado;
  alertEliminado;
  mensajeAlertEliminado;

  constructor(private FutebolServ: FutebolService, private roteLiga: ActivatedRoute) { }

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
    this.roteLiga.queryParams.subscribe(params => {
      this.urlEliminado = params ['sucessoeliminado']
      
      if (this.urlEliminado == 'ok') {
        this.alertEliminado = true
        this.mensajeAlertEliminado = 'O clube foi eliminado!'

        setTimeout(()=>{                           
          this.alertEliminado = false;
        }, 4000);
      }
    })
  }

  
}