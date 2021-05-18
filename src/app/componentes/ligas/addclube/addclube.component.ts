import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addclube',
  templateUrl: './addclube.component.html',
  styleUrls: ['./addclube.component.css']
})

export class AddclubeComponent implements OnInit {

  formularioAdd = new FormGroup({  
    name: new FormControl(null,[Validators.required]),
    urlShield: new FormControl(null),
    country: new FormControl(null),
    vitorias: new FormControl(null),
    empates: new FormControl(null),
    derrotas: new FormControl(null),
    golsPro: new FormControl(null),
    golsContra: new FormControl(null)
  })

  nomeLiga = {
    id:Number,
    name:String
  };
  ID_Liga:number;


  // BOTÃO ADICIONAR DESHABILITADO
  botonAdd = false;

  constructor(private FutebolServ: FutebolService, private rotaAddClube:ActivatedRoute) { }

  ngOnInit(): void {    



    //Enrotamento de Liga
    this.rotaAddClube.params.subscribe(params => {
      this.ID_Liga = parseInt(params['idLiga']); 
      
    this.FutebolServ.getLiga(this.ID_Liga)
    .subscribe (nomeLiga =>{
      this.nomeLiga = nomeLiga ['Liga']
      // console.log(this.nomeLiga)
    })

    });



    // this.formularioAdd = this.formAdd.group({
    //   name: [null, Validators.required],
    //   country: [null],
    //   urlShield: [null],
    //   vitorias: [null],
    //   empates: [null],
    //   derrotas: [null],
    //   golsPro: [null],
    //   golsContra: [null],
    // })

    this.validAdd();
    
  }

  //METODO POST PARA CRIAR NOVOS REGISTROS DESDE O FRONT 
  novoClub(){    
    // PARA FORMULARIO ADDCLUBE NÃO FICAR SEM DADOS
    let name: string = this.formularioAdd.value.name;
    let country: string = this.formularioAdd.value.country;
    let urlShield: string = this.formularioAdd.value.urlShield;
    
    let vitorias = this.formularioAdd.value.vitorias;
    let empates = this.formularioAdd.value.empates;
    let derrotas  = this.formularioAdd.value.derrotas;
    let golsPro = this.formularioAdd.value.golsPro;
    let golsContra = this.formularioAdd.value.golsContra;
    
    if (vitorias==null){ vitorias=0 }
    if (empates==null){ empates=0 }
    if (derrotas==null){ derrotas=0 }
    if (golsPro==null){ golsPro=0 }
    if (golsContra==null){ golsContra=0 }
    if (urlShield==null){ urlShield="https://i.postimg.cc/GtnwF08R/Default-Shield.png" }
    // console.log(this.ID_Liga, name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
    this.FutebolServ.createClube(this.ID_Liga, name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
    .subscribe()
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
  
  //VALORES RANDOM
  dadosRandom(){
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min) //Math.floor é a parte entera do número
    }

    let vitorias = randomNumber (2,5)
    let empates = randomNumber (0,6)
    let derrotas  = randomNumber (2,5)
    let golsPro = randomNumber (5,16)
    let golsContra = randomNumber (5,16)
    
    // MOSTRAR NO FORMULARIO
    this.formularioAdd.patchValue({
      vitorias: vitorias,
      empates: empates,
      derrotas: derrotas,
      golsPro: golsPro,
      golsContra: golsContra
    })
    }

    // voltar() {
    //   location.href = "javascript: history.go(-1)"
    // }
    
    voltarLigaEdit(numeroLiga) {
      location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga/"+numeroLiga+"/editliga"
    }

    voltarAdd(numeroLiga) {
      location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga/"+numeroLiga+"/editliga"+'?sucessoadicionado=ok'
    }

}
