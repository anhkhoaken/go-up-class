import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInformation } from '../../../auth/models';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../../auth/reducers/auth.reducer';
import { AuthActions } from '../../../auth/actions';
import { selectAuthInformation } from '../../../auth/selectors/auth.selector';

@Component({
  selector: 'app-class-list-page',
  templateUrl: './class-list-page.component.html',
  styleUrls: ['./class-list-page.component.css']
})
export class ClassListPageComponent implements OnInit {
  accountInformation$: Observable<AccountInformation>;
  oneClass = {
    id: 'asdasd',
    name: 'anhkhoa',
    code: 'bacbac',
    teacherId: 'asdasdsa'
  };
  constructor(private store: Store<AuthState>) {
    this.store.dispatch(AuthActions.getUserInformation());
  }

  ngOnInit(): void {
    this.accountInformation$ = this.store.pipe(select(selectAuthInformation));
  }

}
