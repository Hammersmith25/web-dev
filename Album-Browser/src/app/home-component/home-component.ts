import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [NavBar, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  
}
