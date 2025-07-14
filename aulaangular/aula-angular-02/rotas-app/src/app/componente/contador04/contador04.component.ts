import { Component } from '@angular/core';
import { ContadorService } from '../../contador.service';

@Component({
  selector: 'app-contador04',
  imports: [],
  templateUrl: './contador04.component.html',
  styleUrl: './contador04.component.css'
})
export class Contador04Component {

  constructor(private contService: ContadorService){}

  valor():number{
    return this.contService.getValor()
  }
 incrementar(){
  this.contService.incrementar()
 }
 decrementar(){
  this.contService.decrementar()
 }
 zerar(){
  this.contService.zerar()
 }
}
