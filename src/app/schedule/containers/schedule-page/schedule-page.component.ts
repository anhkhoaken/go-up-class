import {
  Component,
  ChangeDetectionStrategy, AfterViewInit, AfterViewChecked, DoCheck, OnInit,
} from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { GetScheduleModel, SaveScheduleModel, ScheduleModel } from '../../model/schedule.model';
import { Observable } from 'rxjs';
import { AccountInformation } from '../../../auth/models';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../../auth/reducers/auth.reducer';
import { AuthActions } from '../../../auth/actions';
import { selectAuthInformation } from '../../../auth/selectors/auth.selector';
import { ScheduleState } from '../../reducer/schedule.reducer';
import { ScheduleActions } from '../../actions';
import { ScheduleSelector } from '../../selector';

@Component({
  selector: 'app-schedule-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css'],
})
export class SchedulePageComponent implements OnInit {
  accountInformation$: Observable<AccountInformation>;
  getSchedule$: Observable<GetScheduleModel>;
  getSchedule: GetScheduleModel;
  account: AccountInformation;
  saveSchedule: SaveScheduleModel;
  public selectedDate: Date = new Date(Date.now());
  public scheduleData: ScheduleModel[];
  public eventSettings: EventSettingsModel = { dataSource: this.scheduleData };

  constructor(private store: Store<AuthState>, private scheduleStore: Store<ScheduleState>) {
    this.store.dispatch(AuthActions.getUserInformation());
  }

  ngOnInit() {
    this.accountInformation$ = this.store.pipe(select(selectAuthInformation));
    this.getSchedule$ = this.store.pipe(select(ScheduleSelector.selectSchedule));
    this.accountInformation$.subscribe(value => {
      this.account = value;
    });
    this.getSchedule$.subscribe(value => {
      if (!!value) {
        this.getSchedule = value;
      }
    });
  }

  onGetSchedule(groupId: string) {
    this.scheduleStore.dispatch(ScheduleActions.getSchedule({ groupId }));
  }

  onSaveSchedule() {
    this.saveSchedule = new SaveScheduleModel();
    this.saveSchedule.groupId = this.getSchedule.groupId;
    this.saveSchedule.id = '';
    this.scheduleStore.dispatch(ScheduleActions.saveSchedule({schedules: this.saveSchedule}));
  }
}
