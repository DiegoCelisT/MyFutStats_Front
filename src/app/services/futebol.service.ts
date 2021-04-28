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

}
