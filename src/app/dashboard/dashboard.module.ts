import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HorizontalChartComponent } from './components/horizontal-chart/horizontal-chart.component';
import { PieGridChartComponent } from './components/pie-grid-chart/pie-grid-chart.component';


@NgModule({
  declarations: [DashboardPageComponent, PieChartComponent, HorizontalChartComponent, PieGridChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
  ]
})
export class DashboardModule { }
