import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string = "";
  hermanoPequeño?: string = "";

  getHermanoGrande(): string{
    return this.hermanoGrande || "";
  }

  getHermanoPequeño(): string{
    return this.hermanoPequeño || "";
  }
  
  setHermanoGrande(hermano: string){
    this.hermanoGrande = hermano;
  }


  setHermanoPequeño(hermano: string){
    this.hermanoPequeño = hermano;
  }


  saludar(hermano:string){
    console.log("hola "+hermano)
  }

  preguntarPorHijo():string{
    return "Como esta tu hijo?"
  }

  constructor() { }
}
