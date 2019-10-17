import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:Student;
  constructor(private studentService : StudentService,private router: Router) { }

  ngOnInit() {
   
  }
  submitStudent(form: NgForm){
    console.log("submitStudent invoked");
    this.student = new Student();
    this.student.firstName = form.controls['firstName'].value;
    this.student.lastName = form.controls['lastName'].value;
    this.student.gender = form.controls['gender'].value;
    this.student.maritalStatus = form.controls['maritalStatus'].value;
    this.student.email = form.controls['email'].value;
    this.student.phone = form.controls['phone'].value;
    this.addStudent(this.student);
  }
  
  addStudent(student:Student){
    this.studentService.addStudent(student).subscribe(
      response => {
        console.log("response");
        console.log(response);
          },
      err => {
        console.log("error");
        console.log(err);
      });
      this.router.navigateByUrl('/view');
    }

  

}
