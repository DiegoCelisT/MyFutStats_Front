import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

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
   
   }

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
  }

  //METODO PUT
  editClub(){
    this.FutebolServ.editClube (this.ID, this.name, this.urlShield, this.country, this.position, this.pts, this.J, this.V, this.E, this.D, this.GP, this.GC, this.SG, this.YC, this.RC)
    .subscribe();
    console.log('clubatualizado')
    alert('CLUBE ATUALIZADO') //ES SOLO PARA DAR AVISO
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
    console.log('buscar()' + this.J,this.E)
    this.editClub();
  }

  dadosRandom() {
    this.FutebolServ.sumarJ(); //SUMA UN PARTIDO CADA VEZ QUE EL BOTON ES APRETADO
    this.J = this.FutebolServ.J;
    
    
    this.V = 10;
    this.E = 10;
    this.D = 10;
    this.GP = 10;
    this.GC = 10;
  }
 
}


