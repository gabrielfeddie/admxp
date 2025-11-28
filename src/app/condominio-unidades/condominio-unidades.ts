import { Component } from '@angular/core';
import { CSidebarHome } from "../c-sidebar-home/c-sidebar-home";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-condominio-unidades',
  imports: [CSidebarHome, RouterLink, RouterOutlet],
  templateUrl: './condominio-unidades.html',
  styleUrl: './condominio-unidades.css',
})
export class CondominioUnidades {

}
