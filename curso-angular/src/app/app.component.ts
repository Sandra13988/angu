import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, HijoComponent, FormsModule, HermanoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
