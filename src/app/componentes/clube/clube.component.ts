import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})

export class ClubeComponent implements OnInit {

  resultado: any = [];
  ID: any;
  idNum: Number;
  
  nomeLigas = [];
  
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

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

    this.mostrarAlert()

  }

  //ELIMINAR CLUBE + MODAL
  eliminarClube(contenido){
    this.FutebolServ.eliminarClube(this.ID).subscribe();
    this.modalEliminar.open(contenido, {backdropClass: 'light-blue-backdrop'});
  }

  //CERRAR MODAL E IR PARA LIGA
  fechaModalEliminar() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga"
  }

  //ROTA EDITAR CLUBE
  irEditClube() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/editclube/"+this.ID
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
