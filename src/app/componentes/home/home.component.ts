import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FutebolService } from '../../services/futebol.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rotaHome: ActivatedRoute, private FutebolServ: FutebolService) { }
  
  urlHome;

  //MOSTRAR MODAL BENVINDOS/AS
  mostrar;

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

  //Para simular os próximos jogos (começam em 1 para que se alguém elimina todos os clubes não cause conflito e para dar um start de igualdade no while): (cada liga têm um número diferente de times, por isso o valor random não pode ser o mesmo para todos)
  random1Club1:any = 1
  random1Club2:any = 1
  random2Club1:any = 1
  random2Club2:any = 1
  random3Club1:any = 1
  random3Club2:any = 1
  random4Club1:any = 1
  random4Club2:any = 1
  random5Club1:any = 1
  random5Club2:any = 1
  random6Club1:any = 1
  random6Club2:any = 1
  

  ngOnInit(): void {
    
    this.urlHome = window.location.href
       
    //PARA ABRIR OU NÃO O MODAL
    if (this.urlHome == 'http://localhost:4200/') {
      this.mostrar = true
    } else {
      this.mostrar = false;
    }
  

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min) //Math.floor é a parte entera do número
  }

  this.FutebolServ.getLigas()
  .subscribe (nomeLigas =>{
    this.nomeLigas = nomeLigas ['MyLeagues']
  })
  
  this.FutebolServ.getClubesAll (1)
  .subscribe (resultados => {
    this.resultados1 = resultados ['clubes']
    //Para comprimir nomes compostos de mais de 12 letras (para não quebrar as tabelas)
    for ( let i = 0; i < this.resultados1.length; i++){
      if (this.resultados1[i].name.length > 14){
      //Pega a primeira letra de um nome, aplica um ponto e mostra o resto:
      this.resultados1[i].name = this.resultados1[i].name.split(' ')[0].slice(0,1)+". "+this.resultados1[i].name.substring(this.resultados1[i].name.indexOf(' '))
      }
    }
    //VS Random:
    if(this.resultados1.length > 1){
      while (this.random1Club1 == this.random1Club2){
        this.random1Club1 = randomNumber (0,this.resultados1.length)
        this.random1Club2 = randomNumber (0,this.resultados1.length)
      }
    }
    
  })

  this.FutebolServ.getClubesAll (2)
  .subscribe (resultados => {
    this.resultados2 = resultados ['clubes']
    for ( let i = 0; i < this.resultados2.length; i++){
      if (this.resultados2[i].name.length > 14){
      this.resultados2[i].name = this.resultados2[i].name.split(' ')[0].slice(0,1)+". "+this.resultados2[i].name.substring(this.resultados2[i].name.indexOf(' '))
      }
    }
    //VS Random:
    if(this.resultados2.length > 1){
      while (this.random2Club1 == this.random2Club2){
        this.random2Club1 = randomNumber (0,this.resultados2.length)
        this.random2Club2 = randomNumber (0,this.resultados2.length)
      }
    }
  })

  this.FutebolServ.getClubesAll (3)
  .subscribe (resultados => {
    this.resultados3 = resultados ['clubes']
    for ( let i = 0; i < this.resultados3.length; i++){
      if (this.resultados3[i].name.length > 14){
      this.resultados3[i].name = this.resultados3[i].name.split(' ')[0].slice(0,1)+". "+this.resultados3[i].name.substring(this.resultados3[i].name.indexOf(' '))
      }
    }
    //VS Random:
    if(this.resultados3.length > 1){
      while (this.random3Club1 == this.random3Club2){
        this.random3Club1 = randomNumber (0,this.resultados3.length)
        this.random3Club2 = randomNumber (0,this.resultados3.length)
      }
    }
  })

  this.FutebolServ.getClubesAll (4)
  .subscribe (resultados => {
    this.resultados4 = resultados ['clubes']
    for ( let i = 0; i < this.resultados4.length; i++){
      if (this.resultados4[i].name.length > 14){
      this.resultados4[i].name = this.resultados4[i].name.split(' ')[0].slice(0,1)+". "+this.resultados4[i].name.substring(this.resultados4[i].name.indexOf(' '))
      }
    }
    //VS Random:
    if(this.resultados4.length > 1){
      while (this.random4Club1 == this.random4Club2){
        this.random4Club1 = randomNumber (0,this.resultados4.length)
        this.random4Club2 = randomNumber (0,this.resultados4.length)
      }
    }
  })

  this.FutebolServ.getClubesAll (5)
  .subscribe (resultados => {
    this.resultados5 = resultados ['clubes']
    for ( let i = 0; i < this.resultados5.length; i++){
      if (this.resultados5[i].name.length > 14){
      this.resultados5[i].name = this.resultados5[i].name.split(' ')[0].slice(0,1)+". "+this.resultados5[i].name.substring(this.resultados5[i].name.indexOf(' '))
      }
    }
    //VS Random:
    if(this.resultados5.length > 1){
      while (this.random5Club1 == this.random5Club2){
        this.random5Club1 = randomNumber (0,this.resultados5.length)
        this.random5Club2 = randomNumber (0,this.resultados5.length)
      }
    }
  })

  this.FutebolServ.getClubesAll (6)
  .subscribe (resultados => {
    this.resultados6 = resultados ['clubes']
    for ( let i = 0; i < this.resultados6.length; i++){
      if (this.resultados6[i].name.length > 14){
      this.resultados6[i].name = this.resultados6[i].name.split(' ')[0].slice(0,1)+". "+this.resultados6[i].name.substring(this.resultados6[i].name.indexOf(' '))
      }
    }
    //VS Random:
    if(this.resultados6.length > 1){
      while (this.random6Club1 == this.random6Club2){
        this.random6Club1 = randomNumber (0,this.resultados6.length)
        this.random6Club2 = randomNumber (0,this.resultados6.length)
      }
    }
  })


}


  abrirLink(numeroLiga) {
    location.href='/liga/'+numeroLiga
  }

  abrirClub(numeroLiga, numeroClub) {
    location.href='http://localhost:'+this.FutebolServ.portFront+'/liga/'+numeroLiga+'/clube/'+numeroClub
  }
  
}
