import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../app/services/futebol.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'futebol-Frontend';

  constructor(private FutebolServ: FutebolService) { }

  // ADICIONAR CLASES
  claseModal: string = '';
  claseAnimacionModal: string = '';
  
  // PARA MOSTRAR MODAL
  mostrar;

  // MODIFICAR URL
  urlHome;
  
  nomeLigas = [{
    name:String
  }];

  name:string

  toggleAbajo = true;


  ngOnInit(): void {

    // LIMITA O SCROLL PARA O MODAL
    this.claseModal = 'modalFixo'

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

    // CONDICIONAL PARA ANIMAR MODAL    
      this.urlHome = window.location.href

      if (this.urlHome == 'http://localhost:4200/') {
        this.mostrar = true
        console.log('mostrar APP')
        setTimeout(()=>{     
          
          this.claseModal = 'modalApp'
          this.claseAnimacionModal = 'bolaApp'                  
          
        }, 4500);

      } else {
        this.mostrar = false;
      }
  }

  irHome() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/home"
  }
  
  irLiga(i) {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga/"+i
  }

  editLiga(i) {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga/"+i+"/editliga"
  }

  sobreNos() {
   location.href="http://localhost:"+this.FutebolServ.portFront+"/about-us"
  }

  gitDiego() {
    window.open('https://github.com/DiegoCelisT', '_blank')
  }

  gitJulian() {
    window.open('https://github.com/JulianBoetto', '_blank')
  }
  
}
