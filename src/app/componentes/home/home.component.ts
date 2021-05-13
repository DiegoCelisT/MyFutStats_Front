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

  resultados1 = [];
  resultados2 = [];
  resultados3 = [];
  resultados4 = [];
  resultados5 = [];
  resultados6 = [];
  nomeLigas = [{
    name:String
  }];
  nomeLiga1 = [{
    name:String
  }];
  // ID: any;
  // name: string;
  // urlShield: string;
  // country: string;
  // vitorias: number;
  // empates: number;
  // derrotas: number;
  // golsPro: number;
  // golsContra: number;


  ngOnInit(): void {
    
  this.FutebolServ.getLigas()
  .subscribe (nomeLigas =>{
    this.nomeLigas = nomeLigas ['MyLeagues']
  })
  
  // this.FutebolServ.getClubes ()
  //   .subscribe (resultados => {
  //     this.resultados = resultados ['clubes']
  //   })

  this.FutebolServ.getClubesAll (1)
  .subscribe (resultados => {
    this.resultados1 = resultados ['clubes']
  })
  this.FutebolServ.getClubesAll (2)
  .subscribe (resultados => {
    this.resultados2 = resultados ['clubes']
  })
  this.FutebolServ.getClubesAll (3)
  .subscribe (resultados => {
    this.resultados3 = resultados ['clubes']
  })
  this.FutebolServ.getClubesAll (4)
  .subscribe (resultados => {
    this.resultados4 = resultados ['clubes']
  })
  this.FutebolServ.getClubesAll (5)
  .subscribe (resultados => {
    this.resultados5 = resultados ['clubes']
  })
  this.FutebolServ.getClubesAll (6)
  .subscribe (resultados => {
    this.resultados6 = resultados ['clubes']
  })
}



  abrirLink(numeroLiga) {
    location.href='/liga/'+numeroLiga
  }
}
