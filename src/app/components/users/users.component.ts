import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:1337/user').subscribe(res => {
      this.users = res;
    });
    console.warn(this.users);
  }

}
