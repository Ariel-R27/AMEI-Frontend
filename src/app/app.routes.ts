import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeStatisticsComponent } from './employee-statistics/employee-statistics.component';

export const routes: Routes = [
    { path: 'employee-form', component: EmployeeFormComponent },
    { path: 'employee-statistics', component: EmployeeStatisticsComponent },
    { path: '', redirectTo: '/employee-form', pathMatch: 'full' }  // Redirige por defecto al employeeform
];
