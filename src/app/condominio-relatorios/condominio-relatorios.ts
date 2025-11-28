import { Component } from '@angular/core';
import { CSidebarHome } from "../c-sidebar-home/c-sidebar-home";
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: 'app-condominio-relatorios',
  imports: [CSidebarHome, RouterOutlet, RouterLink],
  templateUrl: './condominio-relatorios.html',
  styleUrl: './condominio-relatorios.css',
})
export class CondominioRelatorios {

}
