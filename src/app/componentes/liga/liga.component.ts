import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  resultados = [];

  constructor(private FutebolServ: FutebolService) { }

  ngOnInit(): void {
    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined
      console.log (resultados)
    })

  }

  
}