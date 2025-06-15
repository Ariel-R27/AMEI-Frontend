import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenuComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amei-frontend';
}
