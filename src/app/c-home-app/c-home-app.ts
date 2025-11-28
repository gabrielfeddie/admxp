import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-c-home-app',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './c-home-app.html',
  styleUrl: './c-home-app.css',
})
export class CHomeApp {

}
