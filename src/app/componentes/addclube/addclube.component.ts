import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';


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

  constructor(private FutebolServ: FutebolService) {

    
   }

  ngOnInit(): void {
  }

  //METODO POST PARA CRIAR NOVOS REGISTROS DESDE O FRONT (PRECISAMOS PEGAR DADOS DO FORMULARIO) DEJO LOS DATOS DE TU CLUB KKKK "Santa Fé", "https://upload.wikimedia.org/wikipedia/commons/5/58/Escudo_de_Independiente_Santa_Fe.png", "Colômbia", 
  novoClub(){
    this.FutebolServ.createClube(this.name, this.urlShield, this.country, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    .subscribe();
    alert('CLUBE ADICIONADO') //ES SOLO PARA DAR AVISO
  }
  
  //BUSCA DADOS DO FORMULARIO E CRIA UM ARRAY PARA USAR NO FUTURO
  buscar(dadosClube: any) {
    // location.href = `/resultados/${form.value.pesquisa}`;
    var dadosJson = {
      name: this.name,
      urlShield: this.urlShield,
      country: this.country,
      position: 0,
      pts: 0,
      J: 0,
      V: 0,
      E: 0,
      D: 0,
      GP: 0,
      GC: 0,
      SG: 0,
      YC: 0,
      RC: 0}
    dadosClube.push(dadosJson);
    this.novoClub();
  }

}
