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

  //PARA RANDOM DE LOS PARTIDOS JUGADOS
  J = 0;


  //Conexões com o Back:
  getClubes (){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/clubes')
  }

  getClube (ID: number){
    return this.httpFutebol.get ('http://localhost:'+this.portBack+'/clube/'+ID)
  }

   //Método POST, para criar novos registros: (para este verbo é necessario passar os parametros no corpo)
  createClube (name: string, urlShield: string, country: string, position: number, pts: number, J: number, V: number, E: number, D: number, GP: number, GC: number, SG: number, YC: number, RC: number){
    return this.httpFutebol.post ('http://localhost:'+this.portBack+'/novoclub', {
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

  //METODO PUT
  editClube (ID: number, name: string, urlShield: string, country: string, position: number, pts: number, J: number, V: number, E: number, D: number, GP: number, GC: number, SG: number, YC: number, RC: number){
    console.log('serivicio'+name, urlShield, country, position, pts, J, V, E, D, GP, GC, SG, YC, RC)
    return this.httpFutebol.put ('http://localhost:'+this.portBack+'/editclube/'+ID, {
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

  //METODO DELETE
  eliminarCLube(ID: number) {
    return this.httpFutebol.delete ('http://localhost:'+this.portBack+'/clube/'+ID)
  }

  sumarJ(){
    this.J = this.J + 1;
    return this.J;
  }

  
}



