import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {

  resultados = [{
    id: Number,
    nome: String,
    urlEscudo: String,
    país: String,
    posição: Number,
    pts: Number,
    J: Number,
    V: Number,
    E: Number,
    D: Number,
    GP: Number,
    GC: Number,
    SG: Number,
    amarelos: Number,
    vermelhos: Number
  }]

  constructor(private FutebolServ: FutebolService) { }

  ngOnInit(): void {
    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined
      console.log (resultados)
    })
  }

}
