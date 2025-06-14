import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  constructor(private router: Router) { }

  goToEmployeeForm() {
    this.router.navigate(['/employee-form']); 
  }

  goToEmployeeFunctionality() {
    this.router.navigate(['/employee-statistics']);  
  }
}
