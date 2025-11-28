import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { CSidebarHome } from '../c-sidebar-home/c-sidebar-home';

@Component({
  selector: 'app-receitas',
  imports: [RouterOutlet, RouterLink, CSidebarHome],
  templateUrl: './receitas.html',
  styleUrl: './receitas.css',
})
export class Receitas {

}
