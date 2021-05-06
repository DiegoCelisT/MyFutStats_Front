import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  formularioAdd: FormGroup;

  //IMAGEN PARA QUIEN NO SUBE ESCUDO. HACEMOS ESTO EN EL BACK!
  urlSinImagen: string = 'data:image/jpeg;base64,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'

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
    
    if (this.vitorias==null){ this.vitorias=this.resultado.vitorias }
    if (this.empates==null){ this.empates=this.resultado.empates }
    if (this.derrotas==null){ this.derrotas=this.resultado.derrotas }
    if (this.golsPro==null){ this.golsPro=this.resultado.golsPro }
    if (this.golsContra==null){ this.golsContra=this.resultado.golsContra }
    if (this.urlShield==null){ this.urlShield=this.urlSinImagen }

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
