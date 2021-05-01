import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})

export class ClubComponent implements OnInit {

  resultado: any = [];//
  ID: any;
  idNum: Number;
 
  

  constructor(private FutebolServ: FutebolService, private roteClub: ActivatedRoute) { }

  

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

  

}
