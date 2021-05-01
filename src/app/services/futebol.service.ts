import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FutebolService {

  
  constructor(private httpFutebol: HttpClient) { }

  //Porto usado no Back:
  port:Number = 3030
  ID: number;

  //PARA RANDOM DE LOS PARTIDOS JUGADOS
  J = 0;

  
  //Conexões com o Back:
  getClubes (){
    return this.httpFutebol.get ('http://localhost:'+this.port+'/clubes')
  }

  getClube (ID: number){
    return this.httpFutebol.get ('http://localhost:'+this.port+'/clube/'+ID)
  }

   //Método POST, para criar novos registros: (para este verbo é necessario passar os parametros no corpo)
  createClube (name: string, urlShield: string, country: string, position: number, pts: number, J: number, V: number, E: number, D: number, GP: number, GC: number, SG: number, YC: number, RC: number){
    return this.httpFutebol.post ('http://localhost:'+this.port+'/novoclub', {
      name: name,
      urlShield: urlShield,
      country: country,
      position: position,
      pts: pts,
      J: J,
      V: V,
      E: E,
      D: D,
      GP: GP,
      GC: GC,
      SG: SG,
      YC: YC,
      RC: RC
    })
  }

  //METODO PUT (NECESITO PEGAR EL ID)
  editClube (ID: number, name: string, urlShield: string, country: string, position: number, pts: number, J: number, V: number, E: number, D: number, GP: number, GC: number, SG: number, YC: number, RC: number){
    console.log('serivicio'+name, urlShield, country, position, pts, J, V, E, D, GP, GC, SG, YC, RC)
    return this.httpFutebol.put ('http://localhost:'+this.port+'/editclube/'+ID, {
      name: name,
      urlShield: urlShield,
      country: country,
      position: position,
      pts: pts,
      J: J,
      V: V,
      E: E,
      D: D,
      GP: GP,
      GC: GC,
      SG: SG,
      YC: YC,
      RC: RC
    })
  }

  sumarJ(){
    this.J = this.J + 1;
    return this.J;
  }

  
}



