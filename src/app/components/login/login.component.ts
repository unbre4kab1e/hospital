import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usr: string;
  pass: string;
  loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
  });
  message: any;

  constructor(private service: UsersService) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.usr = this.loginForm.controls.username.value;
    this.pass = this.loginForm.controls.password.value;
    this.service.login(this.usr, this.pass);
  }

}
