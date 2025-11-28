import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-c-sidebar-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './c-sidebar-home.html',
  styleUrl: './c-sidebar-home.css',
})
export class CSidebarHome {

  constructor(private router: Router) {}   // aqui está a mágica

  onSelectUser(event: any) {
    const value = event.target.value;

    if (value) {
      this.router.navigate([value]);   // navega para a rota
    }
  }
}