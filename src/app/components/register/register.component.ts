import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Nurse', 'doctor'];
  usr: string;
  pass: string;
  fname: string;
  lname: string;
  rl: string;
  mail: string;
  registerForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      username: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
  });
  /*getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }*/
  constructor(private service: UsersService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.usr = this.registerForm.controls.username.value;
    this.fname = this.registerForm.controls.first_name.value;
    this.lname = this.registerForm.controls.last_name.value;
    this.mail = this.registerForm.controls.email.value;
    this.pass = this.registerForm.controls.password.value;
    this.rl = this.registerForm.controls.role.value;
    console.warn(this.rl);
    this.service.register(this.fname, this.lname,this.usr, this.mail,this.pass,this.rl);
  }
}
