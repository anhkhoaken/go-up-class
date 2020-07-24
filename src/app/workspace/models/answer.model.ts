import { IssueModel } from './issue.model';

export class QAndAModel {
  issue: IssueModel;
  answers: Array<AnswerModel>;
}

export class AnswerModel {
  id: string;
  issueId: string;
  userId: string;
  userName: string;
  content: string;
}
