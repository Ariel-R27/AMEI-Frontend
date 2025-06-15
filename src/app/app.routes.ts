import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeStatisticsComponent } from './employee-statistics/employee-statistics.component';
import { DepartmentformComponent } from './departmentform/departmentform.component';

export const routes: Routes = [
    { path: 'employee-form', component: EmployeeFormComponent },
    { path: 'employee-statistics', component: EmployeeStatisticsComponent },
    { path: '', redirectTo: '/employee-form', pathMatch: 'full' },
    { path: 'departmentform', component: DepartmentformComponent },
];
