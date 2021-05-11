import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FutebolService {

  
  constructor(private httpFutebol: HttpClient) { }

  //Porto usado no Back:
  portBack:Number = 3030;

  //porto usado no front:
  portFront:Number = 4200;
  
  ID: number;

  //Número de Tabela:
  tableNumber:Number = 2

  //Conexões com o Back:
  getClubes (){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/clubes'+this.tableNumber)
  }
  
  getClubesAll (numeroLiga){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/clubes'+numeroLiga)
  }

  // UM SÓ CLUBE
  getClube (ID: number){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/clube'+this.tableNumber+'/'+ID)
  }

   //Método POST, para criar novos registros: (para este verbo é necessario passar os parametros no corpo)
  createClube (name: string, urlShield: string, country: string, vitorias: number, empates: number, derrotas: number, golsPro: number, golsContra: number){
    return this.httpFutebol.post ('http://localhost:'+this.portBack+'/novoclub'+this.tableNumber, {
      name: name,
      urlShield: urlShield,
      country: country,
      vitorias: vitorias,
      empates: empates,
      derrotas: derrotas,
      golsPro: golsPro,
      golsContra: golsContra,
      })
  }

  //METODO PUT
  editClube (ID: number, name: string, urlShield: string, country: string, vitorias: number, empates: number, derrotas: number, golsPro: number, golsContra: number){
    // console.log('servicio'+ID,name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
    return this.httpFutebol.put ('http://localhost:'+this.portBack+'/editclube'+this.tableNumber+'/'+ID, {
      name: name,
      urlShield: urlShield,
      country: country,
      vitorias: vitorias,
      empates: empates,
      derrotas: derrotas,
      golsPro: golsPro,
      golsContra: golsContra,
    })
  }

  //METODO PUT2 (Para position)
  editClubeIndex (ID: number, position:number){
    return this.httpFutebol.put ('http://localhost:'+this.portBack+'/editclube'+this.tableNumber+'/'+ID, {
      position:position
    })
  }

  //METODO DELETE
  eliminarClube(ID: number) {
    return this.httpFutebol.delete ('http://localhost:'+this.portBack+'/deleteClube'+this.tableNumber+'/'+ID)
  }
 
  //Trazendo todos os nomes das ligas
  getLigas (){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/ligas')
  }

  //METODO PUT (LIGAS)
  editLiga (ID: number, name: string){
    return this.httpFutebol.put ('http://localhost:'+this.portBack+'/liga/'+ID, { name: name })
  }

}