import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
   }
  /*login(username: string, password: string){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get('http://localhost:1337/', {headers, responseType: 'text' as 'json'})
  }*/
  register(firstname: string, lastname: string, username: string, email: string, password: string, role: string){
      const headers = new HttpHeaders({
         Authorization: 'Basic ' + btoa(firstname + ':' + lastname + ':' + username + ':' + email + ':' + password + ':' + role)
         });
      return this.http.get('http://localhost:1337/user/create', {headers, responseType: 'text' as 'json'});
  }




    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
      console.warn(username + ' - ' + password);
      return this.http.post<any>('http://localhost:1337/user/', { username, password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }
              return user;
          }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

}