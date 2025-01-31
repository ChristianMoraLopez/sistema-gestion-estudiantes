// student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedGrade: string = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  searchByGrade() {
    if (this.selectedGrade) {
      this.studentService.getStudentsByGrade(this.selectedGrade).subscribe({
        next: (data) => this.students = data,
        error: (error) => console.error('Error:', error)
      });
    }
  }

  // Add method for handling Enter key
  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchByGrade();
    }
  }
}
