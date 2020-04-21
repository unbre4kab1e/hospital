import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor(private http: HttpClient) { }
  login(username:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get("http://localhost:1337/",{headers,responseType: 'text' as 'json'})
}

  getUsers() {
    let username='javatechie'
    let password='jt143'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   return  this.http.get("http://localhost:1337/getUsers",{headers});
  }
}
