import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceImcService {

  constructor() { }

  caculateImc(peso:number, altura:number){
    return peso / (altura * altura);

}
}