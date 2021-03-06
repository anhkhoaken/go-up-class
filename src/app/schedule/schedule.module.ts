import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SchedulePageComponent } from './containers/schedule-page/schedule-page.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponentComponent } from './components/schedule-component/schedule-component.component';
import { MonthService, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ScheduleService } from './service/schedule.service';



@NgModule({
  declarations: [SchedulePageComponent, ScheduleComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    ScheduleRoutingModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ScheduleModule,
    NbButtonModule,
    NbCardModule,
  ],
  providers: [MonthService, ScheduleService],
  exports: [SchedulePageComponent]
})
export class MyScheduleModule { }
