import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editliga',
  templateUrl: './editliga.component.html',
  styleUrls: ['./editliga.component.css']
})
export class EditligaComponent implements OnInit {

  constructor(private FutebolServ: FutebolService, private roteEditLiga: ActivatedRoute) { }

  resultados = [];
  name:string;
  ID_clube: any;
  pesquisa:string; //Para o formulario de pesquisa
  nomeLiga = {
    id:Number,
    name:String
  };

  //ALERT ELIMINADO Y ADICIONADO
  urlEliminado;
  alertEliminado;
  mensajeAlertEliminado;
  
  urlAdd;
  alertAdd;
  mensajeAlertAdd = '';

  //ALERT EDITADO
  urlEdit;
  alertEdit;
  mensajeAlertEdit = ''
  
  // MODAL ELIMINADO
  idModal;
  nameModal;
  urlModal;

  ID_Liga:number;

  ngOnInit(): void {

    //Enrotamento de Liga
    this.roteEditLiga.params.subscribe(params => {
      this.ID_Liga = parseInt(params['idLiga']);      
      
      this.FutebolServ.getLiga(this.ID_Liga)
      .subscribe (nomeLiga =>{
        this.nomeLiga = nomeLiga ['Liga']

      })
      
    this.FutebolServ.getClubesAll (this.ID_Liga)
    .subscribe (resultados => {
      this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined  
    })
    });

    this.mostrarAlert();

  }
  
  //METODO PUT (Para cambiarle el nombre a la liga)
  editLiga(numeroLiga){
    this.FutebolServ.editLiga(numeroLiga, this.name)
    .subscribe() 
    window.location.href="http://localhost:4200/liga/"+numeroLiga+"/editliga"
  }

  mostrarAlert() {
    this.roteEditLiga.queryParams.subscribe(params => {
      this.urlEliminado = params ['sucessoeliminado']
      this.urlAdd = params ['sucessoadicionado']
      this.urlEdit = params ['sucessoedit']
      
      if (this.urlEliminado == 'ok') {
        this.alertEliminado = true
        this.mensajeAlertEliminado = 'O clube foi eliminado!'

        setTimeout(()=>{                           
          this.alertEliminado = false;
        }, 4000);

      }  else if (this.urlEdit == 'ok') {
        this.alertEdit = true
        this.mensajeAlertEdit = 'O clube foi editado!'
        setTimeout(()=>{                           
          this.alertEdit = false;
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
        this.alertEdit = false
      }
          
    })

  }

  addClube(numeroLiga) {
    location.href="http://localhost:"+this.FutebolServ.portFront+"/liga/"+numeroLiga+"/addclube/"
  }
    
  volverLiga(numeroLiga) {
    location.href="http://localhost:"+this.FutebolServ.portFront+"/liga/"+numeroLiga
  }

  editClube(numeroLiga, id) {    
    location.href="http://localhost:4200/liga/"+numeroLiga+"/editclube/"+id
  }

  pegaID(id, name, urlShield) {
    this.idModal = id
    this.nameModal = name
    this.urlModal = urlShield
  }

  eliminarClube(ID_Liga, ID){
    this.FutebolServ.eliminarClube(ID_Liga, ID).subscribe(()=>{
      this.FutebolServ.getClubesAll (ID_Liga)
      .subscribe (resultados => {
        this.resultados = resultados ['clubes']
        this.mostrarAlertEliminado()
    })
    })
  }

  mostrarAlertEliminado() {
    this.alertEliminado = true
    this.mensajeAlertEliminado = 'O clube foi eliminado!'

    setTimeout(()=>{                           
      this.alertEliminado = false;
    }, 4000);
  }

}