import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';


@Component({
  selector: 'app-addclube',
  templateUrl: './addclube.component.html',
  styleUrls: ['./addclube.component.css']
})

export class AddclubeComponent implements OnInit {

  //DADOS DO FORMULARIO ADDCLUBE
  name: string;
  country: string;
  urlShield: string;

  dadosClube = [];

  constructor(private FutebolServ: FutebolService) {

    
   }

  ngOnInit(): void {
  }

  //METODO POST PARA CRIAR NOVOS REGISTROS DESDE O FRONT (PRECISAMOS PEGAR DADOS DO FORMULARIO)   "Santa Fé", "https://upload.wikimedia.org/wikipedia/commons/5/58/Escudo_de_Independiente_Santa_Fe.png", "Colômbia", 
  novoClub(){
    console.log('novoClub')
    this.FutebolServ.createClube(this.name, this.urlShield, this.country, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    .subscribe();
    alert('CLUBE ADICIONADO') //ES SOLO PARA DAR AVISO
  }
  
  //BUSCA DADOS DO FORMULARIO E CRIA UM ARRAY PARA USAR NO FUTURO
  buscar(dadosClube) {
    // location.href = `/resultados/${form.value.pesquisa}`;
    dadosClube.push(this.name);
    dadosClube.push(this.country);
    dadosClube.push(this.urlShield);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0);
    dadosClube.push(0); 
    console.log(dadosClube)
    this.novoClub();
  }

}
