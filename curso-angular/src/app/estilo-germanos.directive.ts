import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloGermanos]',
  standalone: true
})
export class EstiloGermanosDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'green';
  }
 
}
