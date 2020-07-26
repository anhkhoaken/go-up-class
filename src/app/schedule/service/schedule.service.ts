import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProjectModel } from '../../project/models/project.model';
import { GetScheduleModel, SaveScheduleModel } from '../model/schedule.model';
import { Observable } from 'rxjs';

@Injectable()
export class ScheduleService {
  constructor(private httpClient: HttpClient) {
  }

  getSchedule(groupId: string): Observable<GetScheduleModel> {
    return this.httpClient.get<GetScheduleModel>(`${environment.apiUrl}/Projects/get`);
  }

  saveSchedule(schedule: SaveScheduleModel) {
    return this.httpClient.post(`${environment.apiUrl}/Projects/create`, schedule);
  }
}
