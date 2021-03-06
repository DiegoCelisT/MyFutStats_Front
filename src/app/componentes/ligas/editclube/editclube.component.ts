import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editclube',
  templateUrl: './editclube.component.html',
  styleUrls: ['./editclube.component.css']
})
export class EditclubeComponent implements OnInit {

  resultado: any = [];
   
  ID: any;
  idNum: Number;
  ID_Liga: any;
  formularioEdit: FormGroup;
  
  nomeLiga = {
    id:Number,
    name:String
  };
  
  // BOTÃO EDITAR DESHABILITADO
  botonEdit = false;

  constructor(private FutebolServ: FutebolService, private rotaLiga:ActivatedRoute, private roteClub: ActivatedRoute, private formEdit: FormBuilder) { }

  ngOnInit(): void {

    //Rote params de Liga
    this.rotaLiga.params.subscribe(params => {
      this.ID_Liga = parseInt(params['idLiga'])

      this.FutebolServ.getLiga(this.ID_Liga)
      .subscribe (nomeLiga =>{
        this.nomeLiga = nomeLiga ['Liga']
      })

      //USA EL ID DE LA URL PARA MOSTRAR UN CLUB
      this.roteClub.params.subscribe(params => {
        this.idNum = parseInt(params['id']);
        this.ID = this.idNum    
        this.FutebolServ.getClube(this.ID_Liga, this.ID)
          .subscribe (resultados => {
            this.resultado = resultados ['clube'];
            this.formularioEdit = this.formEdit.group({
              name: [this.resultado.name,Validators.required],
              country: [this.resultado.country],
              urlShield: [this.resultado.urlShield],
              vitorias: [this.resultado.vitorias],
              empates: [this.resultado.empates],
              derrotas: [this.resultado.derrotas],
              golsPro: [this.resultado.golsPro],
              golsContra: [this.resultado.golsContra]
            })
          })
      })
    })
   
    this.formularioEdit = this.formEdit.group({
      name: [null,Validators.required],
      country: [null],
      urlShield: [null],
      vitorias: [null],
      empates: [null],
      derrotas: [null],
      golsPro: [null],
      golsContra: [null],
    })

    this.validEdit();

  }

  //METODO PUT
  editClub(){

    // PARA FORMULARIO EDITCLUBE NÃO FICAR SEM DADOS
    let name = this.formularioEdit.value.name;
    let country = this.formularioEdit.value.country;
    let urlShield = this.formularioEdit.value.urlShield;
    let vitorias = this.formularioEdit.value.vitorias;
    let empates = this.formularioEdit.value.empates;
    let derrotas = this.formularioEdit.value.derrotas;
    let golsPro = this.formularioEdit.value.golsPro;
    let golsContra = this.formularioEdit.value.golsContra;

    if (name==null){ name=this.resultado.name }
    if (country==null){ country=this.resultado.country }
    if (vitorias==null){ vitorias=0 }
    if (empates==null){ empates=0 }
    if (derrotas==null){ derrotas=0 }
    if (golsPro==null){ golsPro=0 }
    if (golsContra==null){ golsContra=0 }  
    if (urlShield=='' || null){ urlShield = "https://i.postimg.cc/GtnwF08R/Default-Shield.png"} 
    else { urlShield=this.formularioEdit.value.urlShield }

    this.FutebolServ.editClube(this.ID_Liga, this.ID, name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
      .subscribe()

      let A = (document.referrer) //Página Anterior no histórico
      let B ='http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/editclube/'+this.ID
      console.log (A, B+"?sucessoadicionado=ok")
      let C ='http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/editliga'

      if (A == B){
        location.href='http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/clube/'+this.ID+'?sucessoedit=ok'
      } else if (A == C+"?sucessoadicionado=ok"){
        location.href= C+'?sucessoedit=ok'
      } else {
        location.href= A +'?sucessoedit=ok'
      }
  }

  validEdit(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement
    form.classList.add('was-validated');
  }
  
  voltar() {

    if (document.referrer == 'http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/editliga'+'?sucessoedit=ok' || document.referrer == 'http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/editliga'+'?sucessoadicionado=ok'){
      location.href = 'http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/editliga'
    } else if (document.referrer == 'http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/clube/'+this.ID+'?sucessoedit=ok'){
      location.href ="javascript: history.go(-3)"
    } else if (document.referrer == 'http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'/editclube') {
    location.href ="javascript: history.go(-3)"
    } else {
      location.href ="javascript: history.go(-1)"
    }

  }


}