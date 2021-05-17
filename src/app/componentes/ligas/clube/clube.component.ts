import { Component, OnInit } from '@angular/core';
import { FutebolService } from '../../../services/futebol.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-clube',
  templateUrl: './clube.component.html',
  styleUrls: ['./clube.component.css']
})

export class ClubeComponent implements OnInit {

  resultado: any = [];
  ID: any;
  ID_Liga:any;

  resultados = [];
  resultadosSort = [];
  nomeLiga = {
    id:Number,
    name:String
  };
  
  position:number

  //ALERT EDITADO
  alertEdit;
  mensajeAlertEdit = ''
  urlEdit;
  urlEliminado;

   // MODAL ELIMINADO
   idModal;
   nameModal;
   urlModal;

  constructor(private FutebolServ: FutebolService, private rotaLiga:ActivatedRoute, private roteClub: ActivatedRoute, private modalEliminar: NgbModal) { }

  ngOnInit(): void {
  //Rote params de Liga
    this.rotaLiga.params.subscribe(params => {
      this.ID_Liga = parseInt(params['idLiga'])

      this.FutebolServ.getLiga(this.ID_Liga)
      .subscribe (nomeLiga =>{
        this.nomeLiga = nomeLiga ['Liga']
        // console.log(this.nomeLiga)
      })

      //Rote params Clube
      this.roteClub.params.subscribe(params => {
        this.ID = parseInt(params['id'])
        
        
        this.FutebolServ.getClube(this.ID_Liga,this.ID)
        .subscribe (resultados => {this.resultado = resultados ['clube']})
      });


      //Trazendo a listagem para ordenar
      this.FutebolServ.getClubesAll (this.ID_Liga)
      .subscribe (resultados => {
        this.resultados = resultados ['clubes']   
        this.resultadosSort = this.resultados.sort(function (a, b) {
          if ( a.pontos < b.pontos) {
            return 1;
          }
          if (a.saldoGols > b. saldoGols || a.pontos > b.pontos ) {
            return -1;
          }
          return 0;
        });
        for (let P = 0; P < this.resultadosSort.length; P++){
        if (this.ID == this.resultadosSort[P].id){
          this.position=P+1
        }
        }
      })
    })
    
    this.mostrarAlert()

  }


  //ELIMINAR CLUBE
  eliminarClube(ID_Liga, ID){
    this.FutebolServ.eliminarClube(ID_Liga, ID).subscribe();
    location.href='http://localhost:'+this.FutebolServ.portFront+'/liga/'+this.ID_Liga+'?sucessoeliminado=ok'
  }


  //CERRAR MODAL E IR PARA LIGA
  fechaModalEliminar() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga1"
  }

  //ROTA EDITAR CLUBE
  irEditClube() {
    location.href ="http://localhost:"+this.FutebolServ.portFront+"/liga/"+this.ID_Liga+"/editclube/"+this.ID
  }

  mostrarAlert() {
    this.roteClub.queryParams.subscribe(params => {
      this.urlEdit = params ['sucessoedit']
      
      if (this.urlEdit == 'ok') {
        this.alertEdit = true
        this.mensajeAlertEdit = 'O clube foi editado!'

        setTimeout(()=>{                           
          this.alertEdit = false;
        }, 4000);
      }
    })
  }

  //Lógica para voltar na janela correta quando um clube é editado (de outra maneira, volta a editclube quando se quer voltar ao lugar de origem)

  voltar() {
      if(this.urlEdit == 'ok'){
        location.href = "javascript: history.go(-3)"
      } else {
        window.history.back()
      }
   }

}
