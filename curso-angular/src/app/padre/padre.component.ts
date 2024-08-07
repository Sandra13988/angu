import { Component, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from '../hermano/hermano.component';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloGermanosDirective } from '../estilo-germanos.directive';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, FormsModule, HermanoComponent, EstiloGermanosDirective],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit{



  valorContador:number = 0
  //datoHijo:number = 0  Esto va en el componente hijo

  mensajePadre = "Mensaje desde el padre al hijo"
  reciboMensajeDelHijo: string = "";

  //Funcion que recibe el evento y le pasa ese valor a la variable reciboMensaje
  recibirMensaje($event:string){
    this.reciboMensajeDelHijo = $event;
  }

  //Contador
  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }

  constructor(
    private _ServicioFamiliar: ServicioFamiliarService
  ){
    
  }

  nombre?: string;

  ngOnInit(): void {
    this._ServicioFamiliar.setHermanoPequeño("Juan")
    this.nombre = this._ServicioFamiliar.getHermanoPequeño();
  }


  saludar(){
    this._ServicioFamiliar.saludar(this._ServicioFamiliar.getHermanoGrande());
  }
 
  
  preguntar(){
    console.log(this._ServicioFamiliar.preguntarPorHijo());
  }
}
