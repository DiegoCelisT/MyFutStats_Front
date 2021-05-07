import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private FutebolServ: FutebolService) { }

  resultados = [];
  resultadosSort = [];
  nomeLigas = [{
    name:String
  }];

  ID: any;
  name: string;
  urlShield: string;
  country: string;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;


  ngOnInit(): void {
    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })
  
  this.FutebolServ.getClubes ()
  .subscribe (resultados => {
    this.resultados = resultados ['clubes']
  })
  }
}
