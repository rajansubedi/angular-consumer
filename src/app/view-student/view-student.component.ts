import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../student';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }
  
  ngOnInit() {
    this.getAllStudents();
  }

  students:Array<Student>;
  student1:Student;
  getAllStudents(){
    
    this.studentService.getAllStudent().subscribe(
      response=>{
          this.students=response;
          
          
      },
      err=>{
          console.log(err);
      }

    );
  }

  deleteStudent(studentId:string){
    
    this.studentService.deleteStudentById(studentId).subscribe(
      response=>{
          this.students=response;
          
          
      },
      err=>{
          console.log(err);
      }

    );

  }
  
  updateStudent(form: NgForm){
    this.student1 = new Student();
    this.student1.studentId = form.controls['studentId'].value;
    this.student1.firstName = form.controls['firstName'].value;
    console.log(this.student1.firstName);
    this.student1.lastName = form.controls['lastName'].value;
    this.student1.gender = form.controls['gender'].value;
    this.student1.maritalStatus = form.controls['maritalStatus'].value;
    this.student1.email = form.controls['email'].value;
    this.student1.phone = form.controls['phone'].value;
    this.studentService.updateStudent(this.student1).subscribe(
      response => {
          console.log(response);
      }
      ,
      err=>{console.log(err);}
    );

    this.router.navigateByUrl('/view');
  }

}
