import { Component } from '@angular/core';
import { CSidebarHome } from "../c-sidebar-home/c-sidebar-home";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-condominio-dashboard',
  imports: [CSidebarHome, RouterLink, RouterOutlet],
  templateUrl: './condominio-dashboard.html',
  styleUrl: './condominio-dashboard.css',
})
export class CondominioDashboard {

}
