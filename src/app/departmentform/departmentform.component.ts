import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-departmentform',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './departmentform.component.html',
  styleUrl: './departmentform.component.css'
})

export class DepartmentformComponent implements OnInit {
  departmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      departmentName: ['', Validators.required]  // El nombre del departamento es obligatorio
    });
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      const formData = {
        nombre: this.departmentForm.value.departmentName
      };

      console.log('Datos enviados al backend:', formData);

      this.http.post('http://localhost:8080/department/create', formData)
        .subscribe(response => {
          console.log('Empleado creado:', response);
        });

    } else {
      console.log('Formulario inválido');
    }
  }
}




