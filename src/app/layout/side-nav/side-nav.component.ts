import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountInformation } from '../../auth/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() information: AccountInformation;
  constructor() { }

  ngOnInit(): void {
  }

}
