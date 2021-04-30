import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editclube',
  templateUrl: './editclube.component.html',
  styleUrls: ['./editclube.component.css']
})
export class EditclubeComponent implements OnInit {

  resultados = [{
    id: Number,
    name: String,
    urlShield: String,
    country: String,
    position: Number,
    pts: Number,
    J: Number,
    V: Number,
    E: Number,
    D: Number,
    GP: Number,
    GC: Number,
    SG: Number,
    YC: Number,
    RC: Number
  }]

  ID: any;
  idNum: Number;

  // PARA EDITAR CLUB
    
  name: string;
  urlShield: string;
  country: string;
  position: number;
  pts: number;
  J: number;
  V: number;
  E: number;
  D: number;
  GP: number;
  GC: number;
  SG: number;
  YC: number;
  RC: number;

  //ARRAY PARA ALMACENAR OS DADOS
  dadosEditClube = [];

  constructor(private FutebolServ: FutebolService, private roteClub: ActivatedRoute) {
    
    //USA EL ID DE LA URL
    this.roteClub.params.subscribe(params => {
      this.idNum = (parseInt(params['id'])-1);
      this.ID = this.idNum.toString()
    });
   }

  ngOnInit(): void {
    this.FutebolServ.getClubes()
    .subscribe (resultados => {
    this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined
      console.log (resultados + 'club component')
    })  
  }

  //METODO PUT
  editClub(){
    this.FutebolServ.editClube (this.name, this.urlShield, this.country, this.position, this.pts, this.J, this.V, this.E, this.D, this.GP, this.GC, this.SG, this.YC, this.RC)
    .subscribe();
    console.log('novoclub')
  }

   //BUSCA DADOS DO FORMULARIO E CRIA UM ARRAY PARA USAR NO FUTURO
   buscar(dadosEditClube: any) {
    var dadosJson = {
      name: this.name,
      urlShield: this.urlShield,
      country: this.country,
      position: this.position,
      pts: this.pts,
      J: this.J,
      V: this.V,
      E: this.E,
      D: this.D,
      GP: this.GP,
      GC: this.GC,
      SG: this.SG,
      YC: this.YC,
      RC: this.RC}
    dadosEditClube.push(dadosJson);
    this.editClub();
  }
}
