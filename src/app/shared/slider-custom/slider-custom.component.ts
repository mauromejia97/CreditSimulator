import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';


@Component({
  selector: 'app-slider-custom',
  templateUrl: './slider-custom.component.html',
  styleUrls: ['./slider-custom.component.css']
})
export class SliderCustomComponent {

  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() title: string = "";
  @Output() returnValue:EventEmitter<number> = new EventEmitter();

  valor: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.valor = this.min;
    this.returnValue.emit(this.valor)
  }


  /* CREAR TIPO VALOR PARA EVENTO */
  onInputChange(event: MatSliderChange) {
    this.valor = event.value || 0 ;
    this.returnValue.emit(event.value || 0);
  }

  cambio(event: any) {
    if (event.target.value < this.min) {
      this.valor = this.min
    }
    else if (event.target.value > this.max) {
      this.valor = this.max
    }
    else {
      this.valor = event.target.value || 0 ;
    }
    this.returnValue.emit(this.valor);
  }
}
