import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addclube',
  templateUrl: './addclube.component.html',
  styleUrls: ['./addclube.component.css']
})

export class AddclubeComponent implements OnInit {

  // DADOS DO FORMULARIO ADDCLUBE
  name: string;
  country: string;
  urlShield: string;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;

  resultado: any = [];
  defaultValue = 0;
  formularioAdd: FormGroup;

  // BOTÃO ADICIONAR DESHABILITADO
  botonAdd = false;

  constructor(private FutebolServ: FutebolService, private formAdd: FormBuilder) { }

  ngOnInit(): void {

    this.formularioAdd = this.formAdd.group({
      name: [null],
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
    
    if (this.vitorias==null){ this.vitorias=0 }
    if (this.empates==null){ this.empates=0 }
    if (this.derrotas==null){ this.derrotas=0 }
    if (this.golsPro==null){ this.golsPro=0 }
    if (this.golsContra==null){ this.golsContra=0 }

    this.FutebolServ.createClube(this.name, this.urlShield, this.country, this.vitorias, this.empates, this.derrotas, this.golsPro, this.golsContra)
    .subscribe();
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
