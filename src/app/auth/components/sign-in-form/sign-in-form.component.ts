import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthModel } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  @Output() saveAuthModel = new EventEmitter();

  authInfo: AuthModel;
  rfauthInfo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rfauthInfo = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSubmit() {
    this.authInfo = new AuthModel();
    this.authInfo.username = this.rfauthInfo.get('username').value;
    this.authInfo.password = this.rfauthInfo.get('password').value;
    this.saveAuthModel.emit(this.authInfo);
  }
}
