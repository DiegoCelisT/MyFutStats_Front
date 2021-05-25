import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // ADICIONA CLASES
  claseModal: string = '';
  semCircle: string = '';
  
  // PARA MOSTRAR MODAL
  mostrar;

  urlHome = window.location.href;

  constructor(private location: Location) { }
  
  ngOnInit(): void {

    // MOSTRA MODAL AO INICIO
    this.mostrar = true;
    
    //PARA ABRIR OU NÃO O MODAL    
    if (this.urlHome == 'http://localhost:4200/') {
      this.claseModal = 'modal d-block';
      this.location.go('/home?bem_vindos=ok')
    }

    // FECHAR MODAL
    setTimeout(()=>{     
      this.mostrar = false; 
    }, 4000);

    // OPACIDAD CIRCULOS
    setTimeout(()=>{     
      this.semCircle = 'semCircle' 
    }, 2000);

  }  
  
}
