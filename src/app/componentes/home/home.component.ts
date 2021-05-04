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

  nomeLigas = [];

  ngOnInit(): void {
    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })
  }

}
