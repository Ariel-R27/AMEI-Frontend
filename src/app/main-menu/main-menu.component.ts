import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  appName: any;
  apiUrl: any;

  ngOnInit(): void {
    this.appName = environment.appName;
    console.log("appName", this.appName);
    this.apiUrl = environment.apiUrl;
    console.log("apiUrl", this.apiUrl);
  }

  selectedButton: string = '';

  constructor(private router: Router) { }

  goToEmployeeForm() {
    this.router.navigate(['/employee-form']);
  }

  goToEmployeeFunctionality() {
    this.router.navigate(['/employee-statistics']);
  }

  goToDepartmentForm() {
    this.selectedButton = 'departmentform';
    this.router.navigate(['/departmentform']);
  }


}
