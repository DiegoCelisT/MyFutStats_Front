import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})

export class ClubComponent implements OnInit {

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
  idEdit: any;
  // idNumEdit: Number;

  constructor(private FutebolServ: FutebolService, private roteClub: ActivatedRoute) { 
   
    //USA EL ID DE LA URL PARA MOSTRAR UN CLUB
    this.roteClub.params.subscribe(params => {
      this.idNum = (parseInt(params['id'])-1);
      this.ID = this.idNum.toString()
    });

    //USA EL ID DE LA URL PARA 
    this.roteClub.params.subscribe(params => {
      this.idEdit = params['id'];
      // this.idNum = this.idNum.toString()
    });
  }

    

  ngOnInit(): void {
    this.FutebolServ.getClubes()
    .subscribe (resultados => {
    this.resultados = resultados ['clubes'] //'É importante declarar o nome do JSON que foi dado no back-end, para dessa maneira evitar o erro de cannot read property '0' of undefined
      console.log (resultados + 'club component')
    })  
      
  }

  

}
