import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../../services/manage-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any

  constructor(private service: ManageUsersService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(["/"])
    });
  }

}
