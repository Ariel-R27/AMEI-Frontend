import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const routes: Routes = [
    { path: 'employee-form', component: EmployeeFormComponent },
    { path: '', redirectTo: '/employee-form', pathMatch: 'full' }
];
