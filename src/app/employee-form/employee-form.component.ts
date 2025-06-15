import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})

export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;

  departments = [
    { id: 1, name: 'Sistemas A' },
    { id: 2, name: 'Contabilidad A' },
    { id: 3, name: 'RRHH I' },
    { id: 4, name: 'People A' }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {// Crear el formulario
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      hireDate: ['', [Validators.required, this.dateValidator]],
      departmentId: ['', Validators.required],  // Departamento
      age: ['', Validators.required],  // Edad
      role: ['', Validators.required],  // Rol
    });
  }

  //Validator personalizado para la fecha
  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const date = new Date(control.value);
    if (!control.value || isNaN(date.getTime())) {
      return { invalidDate: true };
    }
    return null;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData = {
        nombres: this.employeeForm.value.firstName,
        apellidos: this.employeeForm.value.lastName,
        edad: this.employeeForm.value.age,
        rol: this.employeeForm.value.role,
        salario: this.employeeForm.value.salary,
        fechaIngreso: new Date(this.employeeForm.value.hireDate).toISOString(),
      };

      console.log('Datos enviados al backend:', formData);

      this.http.post('http://localhost:8080/employee/create/' + this.employeeForm.value.departmentId, formData)
        .subscribe(response => {
          console.log('Empleado creado:', response);
        });

    } else {
      console.log('Formulario inválido');
    }
  }
}
