import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloGermanosDirective } from '../estilo-germanos.directive';
import { MiPipePersonalizadoPipe } from '../mi-pipe-personalizado.pipe';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [
    EstiloGermanosDirective,
    MiPipePersonalizadoPipe         
  ],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit{
  constructor(
    private _ServicioFamiliar: ServicioFamiliarService
  ){}

  //Se puede hacer el constructor como arriba o usar el inject a partir de Ang16
  // private _servicioFamiliar = inject(ServicioFamiliarService)


  nombre?: string;

  ngOnInit(): void {
    this._ServicioFamiliar.setHermanoGrande("Pedro")
    this.nombre = this._ServicioFamiliar.getHermanoGrande();
  }
  saludar(){
    this._ServicioFamiliar.saludar(this._ServicioFamiliar.getHermanoPequeño());
  }
 
  
  preguntar(){
    console.log(this._ServicioFamiliar.preguntarPorHijo());
  }

}
