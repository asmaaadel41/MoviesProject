import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string = '';
  constructor(private _AuthService: AuthService, private _router: Router) {}
  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.min(16),
      Validators.max(30),
      Validators.required,
    ]),
    email: new FormControl(null,
      [
        Validators.email,
        Validators.required
      ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
    ]),
  });

  submitRegisterForm(registerForm: FormGroup) {
    console.log(registerForm.value);
    this._AuthService.register(registerForm.value).subscribe((response) => {
      console.log(response)
      if (response.message == 'success') {
        this._router.navigate(['login']);
      } else {
        this.error = response.errors.email.message;
        ;
      }
    });
  }

  ngOnInit(): void {}
}
