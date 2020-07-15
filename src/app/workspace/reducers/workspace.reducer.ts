import { Class } from '../models/class.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { HttpError } from '../../core/http-error.model';
import { createAction, createReducer, on, props } from '@ngrx/store';
import { workspaceActions } from '../actions';
import { LessonModel } from '../models/lesson.model';
import { ChapterModel } from '../models/chapter.model';
import { IssueModel } from '../models/issue.model';
import { AnswerModel } from '../models/answer.model';

export interface WorkspaceState extends EntityState<Class> {
  pending: boolean;
  error: HttpError;
  selectClass: string;
  listLesson: Array<LessonModel>;
  selectLesson: string;
  listChapter: Array<ChapterModel>;
  selectChapter: string;
  chapterInformation: ChapterModel;
  listIssue: Array<IssueModel>;
  selectIssue: string;
  listAnswer: Array<AnswerModel>;
}

export const adapter: EntityAdapter<Class> = createEntityAdapter<Class>();

export const initialState: WorkspaceState = adapter.getInitialState({
  pending: false,
  error: null,
  selectClass: '',
  listLesson: null,
  selectLesson: '',
  listChapter: null,
  selectChapter: '',
  chapterInformation: null,
  listIssue: null,
  selectIssue: '',
  listAnswer: null,
});

const reducer = createReducer(
  initialState,

  on(workspaceActions.getClassesInformation, (state => ({
    ...state,
    pending: true,
    error: null,
  }))),
  on(workspaceActions.getClassesInformationSuccess, ((state, { listClass }) => ({
    ...state,
    pending: false,
    error: null,
  }))),
  on(workspaceActions.getClassesInformationFail, ((state, { error }) => ({
    ...state,
    pending: false,
    error
  }))),
  on(workspaceActions.getListLesson, ((state, { classId }) => ({
    ...state,
    pending: true,
    error: null,
    selectClass: classId,
  }))),
  on(workspaceActions.getListLessonSuccess, ((state, { listLesson }) => ({
    ...state,
    pending: false,
    error: null,
    listLesson,
  }))),
  on(workspaceActions.getListLessonFail, ((state, { error }) => ({
    ...state,
    pending: false,
    error
  }))),
  on(workspaceActions.getListChapter, ((state, { lessonId }) => ({
    ...state,
    pending: true,
    error: null,
    selectLesson: lessonId,
  }))),
  on(workspaceActions.getListChapterSuccess, ((state, { listChapter }) => ({
    ...state,
    pending: false,
    error: null,
    listChapter
  }))),
  on(workspaceActions.getListChapterFail, ((state, { error }) => ({
    ...state,
    pending: false,
    error
  }))),
  on(workspaceActions.getChapterInformation, ((state, { chapterId }) => ({
    ...state,
    pending: true,
    error: null,
    selectChapter: chapterId
  }))),
  on(workspaceActions.getChapterInformationSuccess, ((state, { chapterInformation }) => ({
    ...state,
    pending: false,
    error: null,
    chapterInformation
  }))),
  on(workspaceActions.getChapterInformationFail, ((state, { error }) => ({
    ...state,
    pending: false,
    error
  }))),
  on(workspaceActions.getListIssue, ((state, { chapterId }) => ({
    ...state,
    pending: true,
    error: null,
  }))),
  on(workspaceActions.getListIssueSuccess, ((state, { listIssue }) => ({
    ...state,
    pending: false,
    error: null,
    listIssue
  }))),
  on(workspaceActions.getListIssueFail, ((state, { error }) => ({
    ...state,
    pending: false,
    error
  }))),
  on(workspaceActions.getListAnswer, ((state, { issueId }) => ({
    ...state,
    pending: true,
    error: null,
    selectIssue: issueId
  }))),
  on(workspaceActions.getListAnswerSuccess, ((state, { listAnswer }) => ({
    ...state,
    pending: false,
    error: null,
    listAnswer
  }))),
  on(workspaceActions.getListAnswerFail, ((state, { error }) => ({
    ...state,
    pending: false,
    error
  })))
);

