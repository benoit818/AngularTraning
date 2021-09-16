import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {

  students: Student[] = [];

  constructor(private studentservice: StudentService) { }

  ngOnInit() {
    const studentsObservable = this.studentservice.getStudents();
    studentsObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData;
    });
  }
}
