import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInformation } from '../../auth/models';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../auth/reducers/auth.reducer';
import { selectAuthInformation } from '../../auth/selectors/auth.selector';
import { AuthActions } from '../../auth/actions';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  accountInformation$: Observable<AccountInformation>;

  constructor(private store: Store<AuthState>) {
    this.store.dispatch(AuthActions.getUserInformation());
  }

  ngOnInit(): void {
    this.accountInformation$ = this.store.pipe(select(selectAuthInformation));
  }

}
