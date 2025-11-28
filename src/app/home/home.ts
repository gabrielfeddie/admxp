import { Component } from '@angular/core';
import { CSidebarHome } from '../c-sidebar-home/c-sidebar-home';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CSidebarHome, RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
