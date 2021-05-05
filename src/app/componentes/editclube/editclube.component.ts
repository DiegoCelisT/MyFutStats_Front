import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editclube',
  templateUrl: './editclube.component.html',
  styleUrls: ['./editclube.component.css']
})
export class EditclubeComponent implements OnInit {

  resultado: any = [];
   
  ID: any;
  idNum: Number;

  // PARA EDITAR CLUB
  name: string;
  urlShield: string;
  country: string;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;
  
  // pontos:number;
  // jogados:number;
  // saldoGols:number

  nomeLigas = [];  

  constructor(private FutebolServ: FutebolService, private roteClub: ActivatedRoute) { }

  ngOnInit(): void {
        //USA EL ID DE LA URL PARA MOSTRAR UN CLUB
        this.roteClub.params.subscribe(params => {
          this.idNum = parseInt(params['id']);
          this.ID = this.idNum    
          this.FutebolServ.getClube(this.ID)
            .subscribe (resultados => {
              this.resultado = resultados ['clube'] 
            })  
        });
        console.log(this.ID)
    // this.validate();

    this.FutebolServ.getLigas()
    .subscribe (nomeLigas =>{
      this.nomeLigas = nomeLigas ['MyLeagues']
    })

  }

  //METODO PUT
  editClub(){
    this.FutebolServ.editClube(this.ID, this.name, this.urlShield, this.country, this.vitorias, this.empates, this.derrotas, this.golsPro, this.golsContra)
    .subscribe() 
    // console.log('editclub component'+ this.ID, this.name, this.urlShield, this.country, this.vitorias, this.empates, this.derrotas, this.golsPro, this.golsContra)
    alert('CLUBE ATUALIZADO') //ES SOLO PARA DAR AVISO
  }

  // dadosRandom() {
  //   this.FutebolServ.sumarJ(); //SUMA UN PARTIDO CADA VEZ QUE EL BOTON ES APRETADO
  //   this.J = this.FutebolServ.J;
    

  //   this.V = 10;
  //   this.E = 10;
  //   this.D = 10;
  //   this.GP = 10;
  //   this.GC = 10;
  // }

  // validate(){
  //   var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement
  //   form.classList.add('was-validated');
  // }

  

 
}


