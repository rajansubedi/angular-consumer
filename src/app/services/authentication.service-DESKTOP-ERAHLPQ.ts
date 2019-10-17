import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  authenticate(username,password){
    console.log("i am in authenticate");
    const httpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    let options = { headers: httpHeaders};
    return this.httpClient.get<string>('http://localhost:8080/api/student/validateLogin',options).pipe(
      map(
        userData =>{
          sessionStorage.setItem('username',username);
          let authString = 'Basic' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth',authString);
          console.log("i ma in userdata");
          return userData;
        }
      )
    );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('username');
  }
  
}
