import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FutebolService } from '../../services/futebol.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  claseModal: string = '';
  
  // PARA MOSTRAR MODAL
  mostrar;

  // CERRAR MODAL
  cerrarModal = true;

  // MODIFICAR URL
  urlHome;

  // MODIFICAR BOTÃO ENTRAR
  cargando = true;
  buttonCerrar = false;

  constructor(private rotaHome: ActivatedRoute, private router: Router, private FutebolServ: FutebolService) { }

  
  ngOnInit(): void {
    // MOSTRA MODAL AO INICIO
    this.claseModal = 'modal d-block';
    
    // CONDICIONAL PARA MOSTRAR MODAL
    this.rotaHome.queryParams.subscribe(params => {
      this.urlHome = params ['bem_vindos']
      
      if (this.urlHome == 'ok') {
        this.mostrar = false
      } else {
        this.mostrar = true;  
      }
    })
      
    //PARA HABILITAR INGRESO
    window.onload = (event) => {
      this.changeButton()
    }

  }
  
  // FECHAR MODAL BEM-VINDOS/AS
  cerrar() {    
    this.router.navigate(['/home'], {queryParams: { bem_vindos: 'ok'}})
    return this.mostrar = false
  }   

  changeButton() {
    this.cerrarModal = false;              
    this.cargando = false;
    this.buttonCerrar = true;
  }
  
}
