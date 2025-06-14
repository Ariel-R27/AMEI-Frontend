import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-statistics',
  imports: [CommonModule],
  templateUrl: './employee-statistics.component.html',
  styleUrl: './employee-statistics.component.css'
})
export class EmployeeStatisticsComponent {
  response: any;

  // Datos de prueba
  employees = [
    { id: 1, name: 'Juan Perez', age: 25, salary: 3000, dateJoined: '2023-05-01' },
    { id: 2, name: 'Maria Lopez', age: 30, salary: 5000, dateJoined: '2023-04-15' },
    { id: 3, name: 'Carlos Torres', age: 22, salary: 4500, dateJoined: '2023-06-10' },
    { id: 4, name: 'Ana Garcia', age: 28, salary: 3500, dateJoined: '2023-05-30' },
  ];

  // Salario más alto
  getHighestSalary() {
    const highestSalaryEmployee = this.employees.reduce((max, employee) => employee.salary > max.salary ? employee : max, this.employees[0]);
    this.response = {
      message: `Empleado con salario más alto: ${highestSalaryEmployee.name}`,
      data: highestSalaryEmployee.salary,
    };
  }

  //  Edad más baja
  getLowerAge() {
    const youngestEmployee = this.employees.reduce((min, employee) => employee.age < min.age ? employee : min, this.employees[0]);
    this.response = {
      message: `Empleado más joven: ${youngestEmployee.name}`,
      data: youngestEmployee.age,
    };
  }

  // Número de empleados del último mes
  getEmployeeCountLastMonth() {
    const lastMonthDate = new Date();
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

    const recentEmployees = this.employees.filter(employee => new Date(employee.dateJoined) > lastMonthDate);
    this.response = {
      message: `Número de empleados que ingresaron en el último mes: ${recentEmployees.length}`,
      data: recentEmployees.length
    };
  }
}
