import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public label1: string ="Ventas";
  public labels1: string[] = ["Celulares", "Computadores", "Accesorios"];
  public data1 = [[500,250,765]];
  public colors1 =[{backgroundColor: ["#f8da19", "#db5c6c", "#3a3e78"]}]

  public label2: string ="Ganacias";
  public labels2: string[] = ["Celulares", "Computadores", "Accesorios"];
  public data2 = [[50,20,65]];
  public colors2 =[{backgroundColor: ["#41abbb", "#c5994c", "#c95859"]}]

  public label3: string ="Salidas";
  public labels3: string[] = ["Celulares", "Computadores", "Accesorios"];
  public data3 = [[1500,750,965]];
  public colors3 =[{backgroundColor: ["#b73d8b", "#de985c", "#f7df29"]}]

  public label4: string ="Entradas";
  public labels4: string[] = ["Celulares", "Computadores", "Accesorios"];
  public data4 = [[400,350,965]];
  public colors4 =[{backgroundColor: ["#443643", "#cc8a31", "#1c3056"]}]
  

}
