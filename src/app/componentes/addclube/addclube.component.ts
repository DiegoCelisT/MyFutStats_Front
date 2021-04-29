import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';

@Component({
  selector: 'app-addclube',
  templateUrl: './addclube.component.html',
  styleUrls: ['./addclube.component.css']
})
export class AddclubeComponent implements OnInit {

  constructor(private FutebolServ: FutebolService) { }

  ngOnInit(): void {
  }

  //METODO POST PARA CRIAR NOVOS REGISTROS DESDE O FRONT (PRECISAMOS PEGAR DADOS DO FORMULARIO)
  novoClub(){
    console.log('novoClub')
    this.FutebolServ.createClube ("Santa Fé", "https://upload.wikimedia.org/wikipedia/commons/5/58/Escudo_de_Independiente_Santa_Fe.png", "Colômbia", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    .subscribe();
    alert('CLUBE ADICIONADO') //ES SOLO PARA DAR AVISO
  }

}
