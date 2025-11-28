import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-c-sidebar-app',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './c-sidebar-app.html',
  styleUrl: './c-sidebar-app.css',
})
export class CSidebarApp {

}
