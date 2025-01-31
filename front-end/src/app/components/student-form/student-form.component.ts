import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  studentForm: FormGroup;
  showSuccess = false;
  showError = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      birth_date: ['', Validators.required],
      father_name: ['', Validators.required],
      mother_name: ['', Validators.required],
      grade: ['', Validators.required],
      section: ['', Validators.required],
      admission_date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.showSuccess = false;
      this.showError = false;

      this.studentService.createStudent(this.studentForm.value).subscribe({
        next: (response) => {
          console.log('Student created', response);
          this.studentForm.reset();
          this.showSuccess = true;
          this.isSubmitting = false;
          setTimeout(() => this.showSuccess = false, 5000); // Hide after 5 seconds
        },
        error: (error) => {
          console.error('Error creating student', error);
          this.showError = true;
          this.isSubmitting = false;
          setTimeout(() => this.showError = false, 5000);
        }
      });
    }
  }
}
