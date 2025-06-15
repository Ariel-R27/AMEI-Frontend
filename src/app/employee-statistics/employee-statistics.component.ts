import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-statistics',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './employee-statistics.component.html',
  styleUrl: './employee-statistics.component.css'
})
export class EmployeeStatisticsComponent {
  response: any;

  constructor(private http: HttpClient) { }

  // Endpoint para obtener el empleado con el salario más alto
  getHighestSalary() {
    this.http.get('http://localhost:8080/employee/highestSalary', { responseType: 'text' })
      .subscribe({
        next: (data: string) => {
          this.response = {
            message: data,
          };
        },
        error: (error) => {
          this.response = {
            message: 'Error al obtener el salario más alto',
          };
        }
      });
  }

  // Endpoint para obtener el empleado más joven
  getLowerAge() {
    this.http.get('http://localhost:8080/employee/lowerAge', { responseType: 'text' })
      .subscribe({
        next: (data: string) => {
          this.response = {
            message: data,
          };
        },
        error: (error) => {
          this.response = {
            message: 'Error al obtener el salario más alto',
          };
        }
      });
  }


  // Endpoint para obtener el número de empleados que ingresaron el último mes
  getEmployeeCountLastMonth() {
    this.http.get('http://localhost:8080/employee/countLastMonth', { responseType: 'text' })
      .subscribe({
        next: (data: string) => {
          this.response = {
            message: data,
          };
        },
        error: (error) => {
          this.response = {
            message: 'Error al obtener el salario más alto',
          };
        }
      });
  }
}
