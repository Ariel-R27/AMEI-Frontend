import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})

export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      hireDate: ['', [Validators.required, this.dateValidator]],
    })
  }

  //Validator personalizado para la fecha
  dateValidator(control: AbstractControl): { [key: string]: boolean } | null{
    const date = new Date(control.value);
    if (!control.value || isNaN(date.getTime())){
      return { invalidDate: true };
    }
    return null;
  }

  onSubmit(){
    if(this.employeeForm.valid){
      console.log(this.employeeForm.value);
    } else {
      console.log('Formulario invalido');
    }
  }

}
