import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addclube',
  templateUrl: './addclube.component.html',
  styleUrls: ['./addclube.component.css']
})

export class AddclubeComponent implements OnInit {

  resultado: any = [];
  defaultValue = 0;
  formularioAdd: FormGroup;

  //VALORES RANDOM
  vitoriasRandom:Number
  empatesRandom:Number
  derrotasRandom:Number
  golsProRandom:Number
  golsContraRandom:Number
  dadosRandom(){
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min) //Math.floor é a parte entera do número
    }
    this.resultado.vitorias = randomNumber (1,5)
    this.resultado.empates = randomNumber (3,8)
    this.resultado.derrotas  = randomNumber (2,8)
    this.resultado.golsPro = randomNumber (5,20)
    this.resultado.golsContra = randomNumber (7,25)
    }

  // BOTÃO ADICIONAR DESHABILITADO
  botonAdd = false;

  constructor(private FutebolServ: FutebolService, private formAdd: FormBuilder) { }

  ngOnInit(): void {
  
    // function randomNumber(min, max) {
    //   return Math.floor(Math.random() * (max - min) + min) //Math.floor é a parte entera do número
      
    // }
    // function dadosRandom(){
    // this.vitoriasRandom = randomNumber (2,8)
    // this.empatesRandom = randomNumber (2,8)
    // this.derrotasRandom  = randomNumber (2,8)
    // this.golsProRandom = randomNumber (5,20)
    // this.golsContraRandom = randomNumber (5,20)
    // }

    this.formularioAdd = this.formAdd.group({
      name: [null, Validators.required],
      country: [null],
      urlShield: [null],
      vitorias: [null],
      empates: [null],
      derrotas: [null],
      golsPro: [null],
      golsContra: [null],
    })

    this.validAdd();
    
  }

  //METODO POST PARA CRIAR NOVOS REGISTROS DESDE O FRONT 
  novoClub(){

    // PARA FORMULARIO ADDCLUBE NÃO FICAR SEM DADOS
    let name: string = this.formularioAdd.value.name;
    let country: string = this.formularioAdd.value.country;
    let urlShield: string = this.formularioAdd.value.urlShield;
    let vitorias: number = this.formularioAdd.value.vitorias;
    let empates: number = this.formularioAdd.value.empates;
    let derrotas: number = this.formularioAdd.value.derrotas;
    let golsPro: number = this.formularioAdd.value.golsPro;
    let golsContra: number = this.formularioAdd.value.golsContra;
    
    if (this.formularioAdd.value.vitorias==null){ vitorias=0 }
    if (this.formularioAdd.value.empates==null){ empates=0 }
    if (this.formularioAdd.value.derrotas==null){ derrotas=0 }
    if (this.formularioAdd.value.golsPro==null){ golsPro=0 }
    if (this.formularioAdd.value.golsContra==null){ golsContra=0 }
    if (urlShield==null){ urlShield="https://www.clipartmax.com/png/full/19-194040_how-to-set-use-shield-grey-svg-vector-shield-template.png" }

    this.FutebolServ.createClube(name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
    .subscribe()
  }

  voltarLiga() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga?sucessoadd=ok"
  }

  validAdd(){
    let formDadosClube = document.getElementsByClassName('dadosName')[0] as HTMLFormElement
    let formDadosJogos = document.getElementsByClassName('dadosJogos')[0] as HTMLFormElement
    formDadosClube.classList.add('was-validated');
    formDadosJogos.classList.add('was-validated');
  }

  borrarDados() {
    this.formularioAdd.reset();
  }
  
}
