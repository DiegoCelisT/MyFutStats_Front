import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css']
})
export class ClubesComponent implements OnInit {

  clube: any = { name: '' };

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

  
  
  //METODO POST PARA CRIAR NOVOS REGISTROS DESDE O FRONT (comentado para que não crie automaticamente um novo registro cada vez que a gente recarrega a página)
  novoClub(){
    this.FutebolServ.createClube ("Santa Fé", "https://upload.wikimedia.org/wikipedia/commons/5/58/Escudo_de_Independiente_Santa_Fe.png", "Colômbia", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    .subscribe();
    console.log('novoclub')
  }

  
}
