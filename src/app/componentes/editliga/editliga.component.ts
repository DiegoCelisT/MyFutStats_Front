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
  ID: number;
  name:string;
  ID_clube: any;
  nomeTime:string; //Para o formulario de pesquisa
  nomeLiga = [];

  ngOnInit(): void {

    this.FutebolServ.getLigas()
    .subscribe (nomeLiga =>{
      this.nomeLiga = nomeLiga ['MyLeagues']
    })

    this.FutebolServ.getClubes ()
    .subscribe (resultados => {
      this.resultados = resultados ['clubes']
      console.log (resultados)
    })
        
  }

  eliminarClube(ID_clube){
    this.FutebolServ.eliminarClube(ID_clube).subscribe();
    // this.ngOnInit()
    window.location.href="http://localhost:4200/editliga"
  }



  //METODO PUT (Para cambiarle el nombre a la liga)
  editLiga(){
    this.FutebolServ.editLiga(this.ID, this.name)
    .subscribe() 
    alert('Nombre de Liga modificado')
  }


}