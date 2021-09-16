// student.service.ts

import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    EnrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
  },
  {
    id: 2,
    name: 'Rushabh',
    EnrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
  },
  {
    id: 3,
    name: 'Ankit',
    EnrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
  }];

  constructor(protected http: HttpClient) { }

  public getStudents(): any {
    const studentsObservable = new Observable<Student[]>(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });

    return studentsObservable;
  }

  public getstudentsFromApi(): Observable<Student[]> {
    return this.http.get('http://localhost:3000/student/').pipe(
      map((result: any) => this.students = result))
  };
}
