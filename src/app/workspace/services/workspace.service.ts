import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LessonModel } from '../models/lesson.model';
import { QuestionModel, SaveAnswerModel, SaveQuestionModel } from '../models/issue.model';

@Injectable()
export class WorkspaceService {

  constructor(private httpClient: HttpClient) { }

  getListClass() {
    return this.httpClient.get(`${environment.apiUrl}/Classes/get-list-class`);
  }
  getListLesson(classId: string): Observable<Array<LessonModel>> {
    return this.httpClient.get<Array<LessonModel>>(`${environment.apiUrl}/Lessons/get-list-lesson?id=${classId}`);
  }
  getListChapter(lessonId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Chapters/get-list-chapter?id=${lessonId}`);
  }
  getChapterInformation(chapterId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Chapters/get?id=${chapterId}`);
  }
  getListIssue(lessonId: string): Observable<Array<QuestionModel>> {
    return this.httpClient.get<Array<QuestionModel>>(`${environment.apiUrl}/Question/get-list-question?id=${lessonId}`);
  }
  createQuestion(saveQuestion: SaveQuestionModel){
    return this.httpClient.post(`${environment.apiUrl}/Question/create`, saveQuestion);
  }
  createAnswer(saveAnswer: SaveAnswerModel){
    return this.httpClient.post(`${environment.apiUrl}/Answers/create`, saveAnswer);
  }
  getListAnswer(issueId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Answers/get-list-answer?id=${issueId}`);
  }
  getListQuestionAndAnswer(chapterId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Answers/get-qanda?chapterId=${chapterId}`);
  }
}
