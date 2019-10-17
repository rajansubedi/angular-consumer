import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './services/student.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  ngOnInit(): void {}
  constructor(private loginService:AuthenticationService){}
  
}
