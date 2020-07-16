import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css']
})


export class HorizontalChartComponent implements OnInit {
  single: any[];
  multi: any[];

  data = [
    {
      'name': 'Câu hỏi của bản thân',
      'value': 8
    },
    {
      'name': 'Câu hỏi của các bạn khác',
      'value': 20
    },
  ];

  view: any[] = [800, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Đề mục';
  showYAxisLabel = true;
  yAxisLabel = 'Câu hỏi';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single: this.data });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }
}
