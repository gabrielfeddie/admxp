import { Component } from '@angular/core';
import { CSidebarHome } from "../c-sidebar-home/c-sidebar-home";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-condominio-dados',
  imports: [CSidebarHome, RouterLink, RouterOutlet],
  templateUrl: './condominio-dados.html',
  styleUrl: './condominio-dados.css',
})
export class CondominioDados {

}
