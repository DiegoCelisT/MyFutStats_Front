import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service3';
import { ActivatedRoute, CanActivate } from '@angular/router';

@Component({
  selector: 'app-editliga3',
  templateUrl: './editliga3.component.html',
  styleUrls: ['./editliga3.component.css']
})
export class Editliga3Component implements OnInit {

  constructor(private FutebolServ: FutebolService, private roteEditLiga: ActivatedRoute) { }

  resultados = [];
  // ID: number;
  name:string;
  ID_clube: any;
  pesquisa:string; //Para o formulario de pesquisa
  nomeLigas = [{
    name:String
  }];

  //ALERT ELIMINADO
  urlEliminado;
  alertEliminado;
  mensajeAlertEliminado = '';

  ngOnInit(): void {

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes']
      console.log (resultados)
      this.mostrarAlert(); //SI MODIFICAMOS QUE NO CAMBIE DE COMPONENTE AL ELIMINAR UN CLUB, TENEMOS QUE VOLVER A UBICAR ESTA LLAMADA DE LA FUNCION
      //POR QUE NO SE VA A EJECUTAR SI NO RECARGAMOS LA PAGINA. HAY QUE CAMBIAR LA FUNCION.
    })
  }

  eliminarClube(ID_clube){
    this.FutebolServ.eliminarClube(ID_clube).subscribe(()=>{
      this.FutebolServ.getClubes ()
      .subscribe (resultados => {
        this.resultados = resultados ['clubes']
    })
    })
    // this.ngOnInit()
    // location.href="http://localhost:4200/editliga?sucessoeliminado=ok"
    
  }

  //METODO PUT (Para cambiarle el nombre a la liga)
  editLiga(){
    this.FutebolServ.editLiga(1, this.name)
    .subscribe() 
    window.location.href="http://localhost:4200/editliga3"
  }

  mostrarAlert() {
    console.log('ok')
    this.roteEditLiga.queryParams.subscribe(params => {
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

  addClube() {
    location.href="http://localhost:"+this.FutebolServ.portFront+"/liga3/addclube3/"
  }
    

}