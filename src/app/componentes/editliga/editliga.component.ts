import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-editliga',
  templateUrl: './editliga.component.html',
  styleUrls: ['./editliga.component.css']
})
export class EditligaComponent implements OnInit {

  constructor(private FutebolServ: FutebolService, private roteClub: ActivatedRoute, private modalEliminar: NgbModal) { }

  resultados = [];
  ID: any;
  nomeTime:string; //Para o formulario de pesquisa

  ngOnInit(): void {

    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes']
      console.log (resultados)
    })
        
  }

  eliminarClube(ID){
    this.FutebolServ.eliminarClube(ID).subscribe();
  }

}