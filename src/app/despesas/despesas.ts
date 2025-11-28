import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CSidebarHome } from '../c-sidebar-home/c-sidebar-home';
import { CHomeApp } from "../c-home-app/c-home-app";

@Component({
  selector: 'app-despesas',
  imports: [RouterLink, RouterOutlet, CSidebarHome, CHomeApp],
  templateUrl: './despesas.html',
  styleUrl: './despesas.css',
})
export class Despesas {

}
