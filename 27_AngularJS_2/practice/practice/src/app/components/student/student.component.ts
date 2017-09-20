import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { Student } from '../../student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  private editName = false;
  @Output() deleteStudentEvent = new EventEmitter();

  constructor(@Inject(StudentsService) private studentsService: StudentsService) { }

  ngOnInit() {

  }

  onNameClick() {
    this.editName = true;
  }
  updateStudent() {

  }

  deleteStudent(id) {
    this.deleteStudentEvent.emit(this.student);
  }

}
