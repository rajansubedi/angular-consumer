import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {


  intercept(req:HttpRequest<any>, next:HttpHandler) {
    if(sessionStorage.getItem('username') && sessionStorage.getItem('basicAuth')){
      req = req.clone({
        setHeaders : {Authorization : sessionStorage.getItem('basicAuth')}
      })
      return next.handle(req);
    }
  }

  constructor() { }
}
