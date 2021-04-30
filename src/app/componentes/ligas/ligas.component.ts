import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

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

  constructor(private FutebolServ: FutebolService) { }

  ngOnInit(): void {
    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined
      console.log (resultados)
    })

  }

  
}