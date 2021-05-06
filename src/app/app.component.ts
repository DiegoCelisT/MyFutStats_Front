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

 

  ngOnInit(): void {

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

  }

  
}
