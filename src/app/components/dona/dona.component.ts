import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() title: string = 'Sin Titulo';
  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ["Label1","Label2","Label3"];
  //public doughnutChartData: MultiDataSet = [[this.data]];
  @Input('data') doughnutChartData: MultiDataSet = [[100,100,100]];
  @Input('colorsdata') colors: Color[] = [ { backgroundColor: ['#ff7f0e', '#2ca02c', '#d62728'] } ];
}
 