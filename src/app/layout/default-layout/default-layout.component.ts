import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInformation } from '../../auth/models';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../auth/reducers/auth.reducer';
import { selectAuthInformation } from '../../auth/selectors/auth.selector';
import { AuthActions } from '../../auth/actions';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  accountInformation$: Observable<AccountInformation>;

  account: AccountInformation;
  classChildren = [];
  groupChildrenProject = [];
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'lock-outline',
      link: './dashboard'
    },
    {
      title: 'Classes',
      icon: 'person-outline',
      expanded: false,
      children: this.classChildren
    },
    {
      title: 'Schedules',
      icon: 'lock-outline',
      link: './schedule'
    },
    {
      title: 'Project',
      icon: 'lock-outline',
      expanded: false,
      children: this.groupChildrenProject
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: './workspace/ask/abd/listChapter5'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: './workspace/ask/abd/listChapter6'
    },
  ];

  constructor(private store: Store<AuthState>, private sidebarService: NbSidebarService) {
    this.store.dispatch(AuthActions.getUserInformation());
  }

  ngOnInit(): void {
    this.accountInformation$ = this.store.pipe(select(selectAuthInformation));

    this.accountInformation$.subscribe(value => {
      if (!!value) {
        this.account = value;
        console.log(this.account);
        this.account.classResults.forEach(va => {
          this.classChildren.push({
            title: va.no + ' - ' + va.name,
            link: 'workspace/' + va.id + '/listLesson'
          });
        });
        this.groupChildrenProject = this.account.groupResults.map(vh => {
          this.groupChildrenProject.push({
            title: vh.name,
            link: +vh.id + '/project'
          });
        });
      }
    });
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
