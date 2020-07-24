import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class WorkspaceService {

  constructor(private httpClient: HttpClient) { }

  getListClass() {
    return this.httpClient.get(`${environment.apiUrl}/Classes/get-list-class`);
  }
  getListLesson(classId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Lessons/get-list-lesson?id=${classId}`);
  }
  getListChapter(lessonId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Chapters/get-list-chapter?id=${lessonId}`);
  }
  getChapterInformation(chapterId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Chapters/get?id=${chapterId}`);
  }
  getListIssue(chapterId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Issues/get-list-issue?id=${chapterId}`);
  }
  getListAnswer(issueId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Answers/get-list-answer?id=${issueId}`);
  }
  getListQuestionAndAnswer(chapterId: string) {
    return this.httpClient.get(`${environment.apiUrl}/Answers/get-qanda?chapterId=${chapterId}`);
  }
}
