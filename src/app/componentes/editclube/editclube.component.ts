import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
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

  // PARA EDITAR CLUB
  // name: string;
  // urlShield: string;
  // country: string;
  // vitorias: number;
  // empates: number;
  // derrotas: number;
  // golsPro: number;
  // golsContra: number;
  
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
              this.resultado = resultados ['clube']
            })
        });
        
    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })
    this.validEdit();

    this.formularioEdit = this.formEdit.group({
      name: [Validators.required],
      country: [null],
      urlShield: [null],
      vitorias: [null],
      empates: [null],
      derrotas: [null],
      golsPro: [null],
      golsContra: [null],
    })

  }

  //METODO PUT
  editClub(){

    // PARA FORMULARIO EDITCLUBE NÃO FICAR SEM DADOS
    let name: string = this.formularioEdit.value.name;
    let country: string = this.formularioEdit.value.country;
    let urlShield: string = this.formularioEdit.value.urlShield;
    let vitorias: number = this.formularioEdit.value.vitorias;
    let empates: number = this.formularioEdit.value.empates;
    let derrotas: number = this.formularioEdit.value.derrotas;
    let golsPro: number = this.formularioEdit.value.golsPro;
    let golsContra: number = this.formularioEdit.value.golsContra;

    if (this.formularioEdit.value.vitorias==null){ vitorias=0 }
    if (this.formularioEdit.value.empates==null){ empates=0 }
    if (this.formularioEdit.value.derrotas==null){ derrotas=0 }
    if (this.formularioEdit.value.golsPro==null){ golsPro=0 }
    if (this.formularioEdit.value.golsContra==null){ golsContra=0 }
    if (urlShield==null){ urlShield="https://www.clipartmax.com/png/full/19-194040_how-to-set-use-shield-grey-svg-vector-shield-template.png" }

    this.FutebolServ.editClube(this.ID, name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
      .subscribe()
      location.href='http://localhost:'+this.FutebolServ.portFront+'/clube/'+this.ID+'?sucessoedit=ok'
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