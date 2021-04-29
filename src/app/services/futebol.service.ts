import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FutebolService {

  constructor(private httpFutebol: HttpClient) { }

  //Porto usado no Back:
  port:number = 3030

  //Conexões com o Back:
  getClubes (){
    return this.httpFutebol.get ('http://localhost:'+this.port+'/clubes')
  }

  //Método POST, para criar novos registros: (para este verbo é necessario passar os parametros no corpo)
  createClube (name: string, urlShield: string, country: string, position: number, pts: number, J: number, V: number, E: number, D: number, GP: number, GC: number, SG: number, YC: number, RC: number){
    console.log(name, urlShield, country, position, pts, J, V, E, D, GP, GC, SG, YC, RC)
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


}



