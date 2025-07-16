import { Component, OnInit } from '@angular/core';
import { ContServicesService } from '../../cont-services.service';

@Component({
  selector: 'app-contador03',
  imports: [],
  templateUrl: './contador03.component.html',
  styleUrl: './contador03.component.css'
})
export class Contador03Component implements OnInit {

  valor = 0 
  constructor(private contadorService:ContServicesService){}

  ngOnInit () {
    this.contadorService.contador.subscribe(v => this.valor = )
    
  }
  incrementar (){
    this.contadorService.incrementar()
  }
  decrementar(){
    this.contadorService.decrementar()
  }


}
