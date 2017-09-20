import { Component, OnInit, Inject } from '@angular/core';
import { Student } from '../../student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(@Inject(StudentsService) private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(students => {
      this.students = students;
    });

  onDeleteStudentEvent(student: Student) {
    const studentsArray = this.students;
    this.studentsService.deleteStudent(student)
      .subscribe(res => {
        for (let i = 0; i < studentsArray.length; i++) {
          if (studentsArray[i].id === student.id) {
            studentsArray.splice(i, 1);
          }
        }
     });
  }

    // this.students = this.studentsService.getStudents();
  }

}
