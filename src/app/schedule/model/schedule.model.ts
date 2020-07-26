export class ScheduleModel {
  Id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  IsAllDay: boolean;
}

export class GetScheduleModel {
  id: string;
  groupId: string;
  schedules: Array<ScheduleModel>;
}

export class SaveScheduleModel {
  id: string;
  groupId: string;
  schedules: Array<ScheduleModel>;
}
