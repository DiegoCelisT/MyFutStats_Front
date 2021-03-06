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
  ID_Liga:number;

  //Número de Tabela:
  tableNumber:Number = 1
  
  getClubesAll (numeroLiga: number){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/clubes'+numeroLiga)
  }

  // UM SÓ CLUBE
  getClube (numeroLiga:number, ID: number){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/clube'+numeroLiga+'/'+ID)
  }

   //Método POST, para criar novos registros: (para este verbo é necessario passar os parametros no corpo)
  createClube (numeroLiga:number, name: string, urlShield: string, country: string, vitorias: number, empates: number, derrotas: number, golsPro: number, golsContra: number){
    return this.httpFutebol.post ('http://localhost:'+this.portBack+'/novoclub'+numeroLiga, {
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
  editClube (numeroLiga:number, ID: number, name: string, urlShield: string, country: string, vitorias: number, empates: number, derrotas: number, golsPro: number, golsContra: number){
    // console.log('servicio'+ID,name, urlShield, country, vitorias, empates, derrotas, golsPro, golsContra)
    return this.httpFutebol.put ('http://localhost:'+this.portBack+'/editclube'+numeroLiga+'/'+ID, {
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
  eliminarClube(numeroLiga:number, ID: number) {
    return this.httpFutebol.delete ('http://localhost:'+this.portBack+'/deleteClube'+numeroLiga+'/'+ID)
  }

  //Trazendo todos os nomes das ligas
  getLigas (){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/ligas')
  }

  //Trazendo uma liga só
  getLiga (ID_Liga: number){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/liga/'+ID_Liga)
  }

  //METODO PUT (LIGAS)
  editLiga (ID_Liga: number, name: string){
    return this.httpFutebol.put ('http://localhost:'+this.portBack+'/liga/'+ID_Liga, { name: name })
  }

}