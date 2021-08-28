import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  //@Input('valor') progreso:number = 40; asi se renombra en input
  @Input('valor') progreso:number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number>= new EventEmitter();

  cambiarValor(valor:number){
    if (this.progreso >= 100 && valor >= 0) {

      this.progreso = 100;
    }
    else if (this.progreso <= 0 && valor <= 0) {
      this.progreso = 0;
    }else{
      this.progreso += valor;
    }
    this.valorSalida.emit(this.progreso); 
  }
  onChange( valor: number ){
    this.cambiarValor(valor);
  }
}
