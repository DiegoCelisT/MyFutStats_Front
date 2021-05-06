import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-addclube',
  templateUrl: './addclube.component.html',
  styleUrls: ['./addclube.component.css']
})

export class AddclubeComponent implements OnInit {

  // DADOS DO FORMULARIO ADDCLUBE
  name: string;
  country: string;
  urlShield: string;

  //ARRAY PARA ALMACENAR OS DADOS
  dadosClube = [];


  constructor(private FutebolServ: FutebolService, private modalAdd: NgbModal) { }

  ngOnInit(): void {
    this.validAdd();
  }

  //METODO POST PARA CRIAR NOVOS REGISTROS DESDE O FRONT (PRECISAMOS PEGAR DADOS DO FORMULARIO) DEJO LOS DATOS DE TU CLUB KKKK "Santa Fé", "https://upload.wikimedia.org/wikipedia/commons/5/58/Escudo_de_Independiente_Santa_Fe.png", "Colômbia", 
  novoClub(){
    this.FutebolServ.createClube(this.name, this.urlShield, this.country, 0, 0, 0, 0, 0)
    .subscribe();
  }

  voltarLiga() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga?sucessoadd=ok"
  }

  validAdd(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement
    form.classList.add('was-validated');
  }
}
