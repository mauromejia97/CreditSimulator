import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-simulator',
  templateUrl: './credit-simulator.component.html',
  styleUrls: ['./credit-simulator.component.css']
})
export class CreditSimulatorComponent implements OnInit {

  public minCuota = 3;
  public minMonto = 5000;
  public maxCuota = 24;
  public maxMonto = 50000;

  public titleAmount: string = "MONTO TOTAL";
  public titleTerm: string = "PLAZO";
  public cuota: number = 0;
  public monto: number = 0;
  public cuotaFija: number = 0;

  

  constructor() { 
    this.cuota = this.minCuota;
    this.monto = this.minMonto;
  }

  ngOnInit(): void {
  }

  asignarCuota(e: number) {
    this.cuota = e
    this.calcularCuotaFija();
  }
  asignarMonto(e: number) {
    this.monto = e
    this.calcularCuotaFija();
  }
  calcularCuotaFija() {
    this.cuotaFija=this.monto/this.cuota
  }

  

}
