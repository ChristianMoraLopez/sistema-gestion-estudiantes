import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model.js';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://127.0.0.1:8000/';
  private credentials = btoa('chris:4682oscuridad');

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Basic ${this.credentials}`,
      'Content-Type': 'application/json'
    });
  }

  createStudent(student: Student): Observable<Student> {
    const payload = {
      name: student.name,
      birth_date: student.birth_date,      
      father_name: student.father_name,
      mother_name: student.mother_name,
      grade: student.grade,
      section: student.section,
      admission_date: student.admission_date
    };

    return this.http.post<Student>(
      `${this.apiUrl}crear-alumno/`,
      payload,
      {
        headers: this.getHeaders(),
        withCredentials: true
      }
    );
  }

  getStudentsByGrade(grade: string): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.apiUrl}consultar-alumno/${grade}/`,
      {
        headers: this.getHeaders(),
        withCredentials: true
      }
    );
  }
}
