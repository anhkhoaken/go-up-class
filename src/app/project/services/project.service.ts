import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectService {
  constructor(private httpClient: HttpClient) {
  }

  getProject() {
    return this.httpClient.get(`${environment.apiUrl}/Projects/get`);
  }

  saveProject(project: ProjectModel) {
    return this.httpClient.post(`${environment.apiUrl}/Projects/create`, project);
  }
}
