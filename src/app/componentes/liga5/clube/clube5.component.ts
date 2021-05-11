import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service5';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-clube5',
  templateUrl: './clube5.component.html',
  styleUrls: ['./clube5.component.css']
})

export class Clube5Component implements OnInit {

  resultado: any = [];
  ID: any;
  idNum: Number;
  
  resultados = [];
  resultadosSort = [];
  nomeLigas = [{
    name:String
  }];
  
  position:number

  alertEdit;
  mensajeAlertEdit = ''
  urlEdit;
  urlEliminado;

  constructor(private FutebolServ: FutebolService, private roteClub: ActivatedRoute, private modalEliminar: NgbModal) { }

  ngOnInit(): void {

    //USA EL ID DE LA URL PARA MOSTRAR UN CLUB
    this.roteClub.params.subscribe(params => {
      this.idNum = parseInt(params['id']);
      this.ID = this.idNum    
      this.FutebolServ.getClube(this.ID)
      .subscribe (resultados => {this.resultado = resultados ['clube']})
    });

    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes']   
      this.resultadosSort = this.resultados.sort(function (a, b) {
        if ( a.pontos < b.pontos) {
          return 1;
        }
        if (a.saldoGols > b. saldoGols || a.pontos > b.pontos ) {
          return -1;
        }
        return 0;
      });
      for (let P = 0; P < this.resultadosSort.length; P++){
      if (this.ID == this.resultadosSort[P].id){
        this.position=P+1
      }
      }
    })


    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

    this.mostrarAlert()

  }

  //ELIMINAR CLUBE
  eliminarClube(){
    this.FutebolServ.eliminarClube(this.ID).subscribe();
    location.href='http://localhost:'+this.FutebolServ.portFront+'/liga5/'+'?sucessoeliminado=ok'
  }

  //CERRAR MODAL E IR PARA LIGA
  fechaModalEliminar() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga5"
  }

  //ROTA EDITAR CLUBE
  irEditClube() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga5/editclube/"+this.ID
  }

  mostrarAlert() {
    this.roteClub.queryParams.subscribe(params => {
      this.urlEdit = params ['sucessoedit']
      
      if (this.urlEdit == 'ok') {
        this.alertEdit = true
        this.mensajeAlertEdit = 'O clube foi editado!'

        setTimeout(()=>{                           
          this.alertEdit = false;
        }, 4000);
      }
    })
  }
}
