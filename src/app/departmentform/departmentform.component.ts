import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-departmentform',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './departmentform.component.html',
  styleUrl: './departmentform.component.css'
})
export class DepartmentformComponent {
  departmentForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      departmentName: ['', Validators.required]  // El nombre del departamento es obligatorio
    });
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      console.log('Departamento creado:', this.departmentForm.value);
      // Aquí iría la lógica para enviar el formulario al backend (por ejemplo, una API)
    }
  }
}




