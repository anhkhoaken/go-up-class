import { last } from 'rxjs/operators';

export class AuthModel {
  username: string;
  password: string;
}

export class AccountInformation {
  firstName: string;
  lastName: string;
  listClass: Array<string>;

  constructor(firstName: string, lastName: string, listClass: Array<string>) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.listClass = listClass;
  }
}
