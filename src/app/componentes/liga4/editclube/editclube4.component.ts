import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service4';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editclube4',
  templateUrl: './editclube4.component.html',
  styleUrls: ['./editclube4.component.css']
})
export class Editclube4Component implements OnInit {

  resultado: any = [];
   
  ID: any;
  idNum: Number;
 
  formularioEdit: FormGroup;
  
  // pontos:number;
  // jogados:number;
  // saldoGols:number

  nomeLigas = [{
    name:String
  }];
  
  // BOTÃO EDITAR DESHABILITADO
  botonEdit = false;

  constructor(private FutebolServ: FutebolService, private roteClub: ActivatedRoute, private formEdit: FormBuilder) { }

  ngOnInit(): void {
        //USA EL ID DE LA URL PARA MOSTRAR UN CLUB
        this.roteClub.params.subscribe(params => {
          this.idNum = parseInt(params['id']);
          this.ID = this.idNum    
          this.FutebolServ.getClube(this.ID)
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
        });
        
    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
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
    if (urlShield=='' || null){ urlShield = "https://www.clipartmax.com/png/full/19-194040_how-to-set-use-shield-grey-svg-vector-shield-template.png"} 
    else { urlShield=this.formularioEdit.value.urlShield }

    this.FutebolServ.editClube(this.ID, name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
      .subscribe()
      location.href='http://localhost:'+this.FutebolServ.portFront+'/liga4/clube/'+this.ID+'?sucessoedit=ok'
  }

  // dadosRandom() {
  //   this.FutebolServ.sumarJ(); //SUMA UN PARTIDO CADA VEZ QUE EL BOTON ES APRETADO
  //   this.J = this.FutebolServ.J;
    

  //   this.V = 10;
  //   this.E = 10;
  //   this.D = 10;
  //   this.GP = 10;
  //   this.GC = 10;
  // }

  validEdit(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement
    form.classList.add('was-validated');
  }
 
  
}