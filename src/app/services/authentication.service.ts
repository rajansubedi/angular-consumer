import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  
  authenticate(username, password){
    const httpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    let options = { headers: httpHeaders};
    return this.httpClient.get<User>('http://localhost:8081/api/student/validateLogin',options).pipe(
      map(
        userData =>{
          sessionStorage.setItem('username',username);
          console.log("inside userData");
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth',authString);
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
