export class QuestionModel {
  id: string;
  groupName: string;
  content: string;
  answers: Array<AnswerModel>;
}

export class AnswerModel {
  id: string;
  groupName: string;
  content: string;
  createAt: Date;
}

export class SaveQuestionModel {
  lessonId: string;
  content: string;
  classId: string;
}

export class SaveAnswerModel {
  content: string;
  questionId: string;
}
