import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CSidebarApp } from './c-sidebar-app/c-sidebar-app';
import { CHomeApp } from './c-home-app/c-home-app';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CSidebarApp, CHomeApp, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('admxp');
}
