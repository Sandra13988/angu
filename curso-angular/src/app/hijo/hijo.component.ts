import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from '../hermano/hermano.component';
import { PadreComponent } from '../padre/padre.component';


@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule, HermanoComponent, PadreComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() recibeHijo: string = "";

  //Emisor de eventos
  @Output() mensajeDesdeHijo = new EventEmitter<string>();


  mensaje: string = "";

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

}
