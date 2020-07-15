import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class WorkspaceService {

  constructor(private httpClient: HttpClient) { }

  getListClass(listClassId: Array<string>) {
    return this.httpClient.post(`${environment.apiUrl}/Users/user-infor`, listClassId);
  }
  getListLesson(classId: string) {
    return this.httpClient.post(`${environment.apiUrl}/Users/user-infor`, classId);
  }
  getListChapter(lessonId: string) {
    return this.httpClient.post(`${environment.apiUrl}/Users/user-infor`, lessonId);
  }
  getChapterInformation(chapterId: string) {
    return this.httpClient.post(`${environment.apiUrl}/Users/user-infor`, chapterId);
  }
  getListIssue(chapterId: string) {
    return this.httpClient.post(`${environment.apiUrl}/Users/user-infor`, chapterId);
  }
  getListAnswer(issueId: string) {
    return this.httpClient.post(`${environment.apiUrl}/Users/user-infor`, issueId);
  }
}
