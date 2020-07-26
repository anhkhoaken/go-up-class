export class AuthModel {
  username: string;
  password: string;
}

export class AccountInformation {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  classResults: Array<ClassInformation>;
  groupResults: Array<GroupInformation>;
}

export class ClassInformation {
  id: string;
  name: string;
  no: string;
}

export class GroupInformation{
  id: string;
  name: string;
}

