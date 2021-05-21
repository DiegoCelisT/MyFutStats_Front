import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  claseModal: string = '';
  mostrar = true;
  cerrarModal = true;

  urlHome;


  constructor(private rotaHome: ActivatedRoute) { }

  ngOnInit(): void {
    this.claseModal = 'modal d-block';

    // this.rotaHome.queryParams.subscribe(params => {
     
    //   this.urlHome = params ['benvindos']
      
    //   if (this.urlHome == 'ok') {
      
    //     console.log('ok rota')

    //     // setTimeout(()=>{                           
    //     //   this.alertEliminado = false;
    //     // }, 4000);
    //   } 
    // })

  }
  
  cerrar() {
    // this.claseModal = '';
    this.mostrar = false;
  }
  
  ngAfterViewInit() {
    // console.log(funciona)
    // this.mostrar = false;
    this.cerrarModal = false  }

    

  
}
