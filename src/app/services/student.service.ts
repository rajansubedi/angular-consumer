import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  base_url: String = 'http://localhost:8081/api/student/';
  constructor(private http: HttpClient) { }

addStudent(student: Student): Observable<Student> {
    console.log('addStudent api invoked ');
    return this.http.post<Student>(this.base_url+'add', student);
                    
  }

updateStudent(student: Student): Observable<Student> {
      
   return this.http.put<Student>(this.base_url+'update',student);
                    
  }
getAllStudent(): Observable<Array<Student>> {
    
    return this.http.get<Array<Student>>(this.base_url+'getAllStudents'); 
      
}

getStudentById(studentId:string):Observable<Student>{ 
 
    return this.http.get<Student>(this.base_url+'getStudent/'+ studentId); 

}

deleteStudentById(studentId:string):Observable<Array<Student>>{ 
  
  return this.http.delete<Array<Student>>(this.base_url+'delete/'+ studentId); 

}

}
