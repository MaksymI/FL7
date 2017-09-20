import { Injectable } from '@angular/core';
import { Student } from '../student';
import { students } from '../data/students.data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentsService {
  students: Student[] = students;

  constructor(public http: Http) { }

  getStudentsLocal() {
    return this.students;
  }

  getStudents() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(res => res.json());
  }

  deleteStudent(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id)
        .map(res => res.json());
  }
}
