import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'app-passwordform',
  templateUrl: './passwordform.component.html',
  styleUrls: ['./passwordform.component.css']
})
export class PasswordformComponent {
  form: FormGroup;

 constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
      Validators.required,
      PasswordValidators.shouldMatch,
    ],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]}, {
      validator: PasswordValidators.passwordsShouldMatch

  });
}

 get oldPassword() {
   return this.form.get('oldPassword');
 }
 get newPassword() {
   return this.form.get('newPassword');
 }
 get confirmPassword() {
   return this.form.get('confirmPassword');
 }
}
