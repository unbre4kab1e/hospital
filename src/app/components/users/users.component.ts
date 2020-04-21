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
    let resp = this.http.get('http://localhost:1337/user/');
    resp.subscribe((data) => this.users = data);
  }

}
