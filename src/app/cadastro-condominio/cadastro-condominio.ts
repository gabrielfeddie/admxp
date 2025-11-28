import { Component } from '@angular/core';
import { CSidebarHome } from "../c-sidebar-home/c-sidebar-home";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-cadastro-condominio',
  imports: [CSidebarHome, RouterLink, RouterOutlet],
  templateUrl: './cadastro-condominio.html',
  styleUrl: './cadastro-condominio.css',
})
export class CadastroCondominio {

}
