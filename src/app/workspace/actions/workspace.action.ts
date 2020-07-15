import { createAction, props } from '@ngrx/store';
import { Class } from '../models/class.model';
import { HttpError } from '../../core/http-error.model';
import { LessonModel } from '../models/lesson.model';
import { ChapterModel } from '../models/chapter.model';
import { IssueModel } from '../models/issue.model';
import { AnswerModel } from '../models/answer.model';

export const getClassesInformation = createAction(
  '[Workspace] Get Class Information',
  props<{ listClassId: Array<string> }>()
);

export const getClassesInformationSuccess = createAction(
  '[Workspace] Get Class Information Success',
  props<{ listClass: Array<Class> }>()
);

export const getClassesInformationFail = createAction(
  '[Workspace] Get Class Information Fail',
  props<{ error: HttpError }>()
);

export const getListLesson = createAction(
  '[Workspace] Get List Lesson',
  props<{ classId: string }>()
);

export const getListLessonSuccess = createAction(
  '[Workspace] Get List Lesson Success',
  props<{ listLesson: Array<LessonModel> }>()
);

export const getListLessonFail = createAction(
  '[Workspace] Get List Lesson Fail',
  props<{ error: HttpError }>()
);

export const getListChapter = createAction(
  '[Workspace] Get List Chapter',
  props<{ lessonId: string }>()
);

export const getListChapterSuccess = createAction(
  '[Workspace] Get List Chapter Success',
  props<{ listChapter: Array<ChapterModel> }>()
);

export const getListChapterFail = createAction(
  '[Workspace] Get List Chapter Fail',
  props<{ error: HttpError }>()
);

export const getChapterInformation = createAction(
  '[Workspace] Get Chapter Information',
  props<{ chapterId: string }>()
);

export const getChapterInformationSuccess = createAction(
  '[Workspace] Get Chapter Information Success',
  props<{ chapterInformation: ChapterModel }>()
);

export const getChapterInformationFail = createAction(
  '[Workspace] Get Chapter Information Fail',
  props<{ error: HttpError }>()
);

export const getListIssue = createAction(
  '[Workspace] Get List Issue',
  props<{ chapterId: string }>()
);

export const getListIssueSuccess = createAction(
  '[Workspace] Get List Issue Success',
  props<{ listIssue: Array<IssueModel> }>()
);

export const getListIssueFail = createAction(
  '[Workspace] Get List Issue Fail',
  props<{ error: HttpError }>()
);

export const getListAnswer = createAction(
  '[Workspace] Get List Answer',
  props<{ issueId: string }>()
);

export const getListAnswerSuccess = createAction(
  '[Workspace] Get List Answer Success',
  props<{ listAnswer: Array<AnswerModel> }>()
);

export const getListAnswerFail = createAction(
  '[Workspace] Get List Answer Fail',
  props<{ error: HttpError }>()
);

export const workspaceKey = 'workspace';
