import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get('http://localhost:1337/', {headers, responseType: 'text' as 'json'})
  }
  register(firstname: string, lastname: string, username: string, email: string, password: string, role: string){
      const headers = new HttpHeaders({
         Authorization: 'Basic ' + btoa(firstname + ':' + lastname + ':' + username + ':' + email + ':' + password + ':' + role)
         });
         console.warn(email);
      return this.http.get('http://localhost:1337/user/create', {headers, responseType: 'text' as 'json'});
         
  }

}