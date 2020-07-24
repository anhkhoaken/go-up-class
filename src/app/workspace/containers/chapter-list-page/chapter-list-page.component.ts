import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WorkspaceState } from '../../reducers/workspace.reducer';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { selectRouterParams } from '../../../core/store/selectors';
import { AppState } from '../../../core/store/reducers';
import { ChapterModel } from '../../models/chapter.model';
import { WorkspaceSelector } from '../../selectors';
import { workspaceActions } from '../../actions';
import { QAndAModel } from '../../models/answer.model';
import { selectQaa } from '../../selectors/workspace.selector';

@Component({
  selector: 'app-chapter-list-page',
  templateUrl: './chapter-list-page.component.html',
  styleUrls: ['./chapter-list-page.component.css']
})
export class ChapterListPageComponent implements OnInit {
  params$: Observable<Params>;
  listChapter$: Observable<Array<ChapterModel>>;
  classId: string;
  lessonId: string;
  qaa$: Observable<Array<QAndAModel>>;
  qaa: Array<QAndAModel>;

  question: string;

  constructor(private store: Store<WorkspaceState>, private route: Store<AppState>,) {
    this.params$ = this.route.pipe(select(selectRouterParams));
    this.qaa$ = this.store.pipe(select(selectQaa));
  }

  ngOnInit(): void {
    this.listChapter$ = this.store.pipe(select(WorkspaceSelector.getListChapter));
    this.params$.subscribe(value => {
      if (!!value) {
        this.classId = value['classId'];
        this.lessonId = value['lessonId'];
        console.log(this.classId, this.lessonId);
      }
    });
    this.qaa$.subscribe(value => {
      if (!!value) {
        this.qaa = value;
      }
    });
    this.store.dispatch(workspaceActions.getListChapter({ lessonId: this.lessonId }));
  }

  btnClick(chapterId: string) {
    this.store.dispatch(workspaceActions.getListAnswerAndQuestion({ chapterId }));
  }
}
