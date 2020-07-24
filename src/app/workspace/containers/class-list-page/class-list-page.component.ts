import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInformation } from '../../../auth/models';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../../auth/reducers/auth.reducer';
import { AuthActions } from '../../../auth/actions';
import { selectAuthInformation } from '../../../auth/selectors/auth.selector';
import { Class } from '../../models/class.model';
import { WorkspaceState } from '../../reducers/workspace.reducer';
import { workspaceActions } from '../../actions';
import { selectAllClass } from '../../selectors/workspace.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-list-page',
  templateUrl: './class-list-page.component.html',
  styleUrls: ['./class-list-page.component.css']
})
export class ClassListPageComponent implements OnInit {
  accountInformation$: Observable<AccountInformation>;
  listClassId: Array<string>;
  listClass: Observable<Array<Class>>;

  constructor(private authstore: Store<AuthState>, private workStore: Store<WorkspaceState>, private router: Router) {
    this.authstore.dispatch(AuthActions.getUserInformation());
  }

  ngOnInit(): void {
    this.accountInformation$ = this.authstore.pipe(select(selectAuthInformation));

    this.accountInformation$.subscribe(value => {
        if (!!value) {
          this.listClassId = value.listClass;
          this.workStore.dispatch(workspaceActions.getClassesInformation({ listClassId: this.listClassId }));
        }
      }
    );
    this.listClass = this.workStore.pipe(select(selectAllClass));
  }

  onSaveClassId(classId: string){
    this.workStore.dispatch(workspaceActions.getListLesson({classId}));
    this.router.navigate([`/work/workspace/${classId}/listLesson`]);
  }

}
