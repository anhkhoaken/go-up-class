import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-grid-chart',
  templateUrl: './pie-grid-chart.component.html',
  styleUrls: ['./pie-grid-chart.component.css']
})
export class PieGridChartComponent implements OnInit {

  view: any[] = [500, 400];

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

  // options
  showLegend = true;
  showLabels = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { single: this.data });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
