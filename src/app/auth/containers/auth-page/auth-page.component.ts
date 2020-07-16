import { Component, OnInit } from '@angular/core';
import { AuthState } from '../../reducers/auth.reducer';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  constructor(private store: Store<AuthState>, private router: Router) {
  }

  ngOnInit(): void {
  }

  logAuthModel(value) {
    this.router.navigate(['/work/workspace']);
    //this.store.dispatch(AuthActions.signIn({auth: value}));
  }
}
