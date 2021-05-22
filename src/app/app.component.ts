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
  
  nomeLigas = [{
    name:String
  }];

  name:string

  toggleAbajo = true;


  ngOnInit(): void {

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

  }

  irHome() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/home?bem_vindos=ok"
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
