import { Component } from '@angular/core';
import { RouterOutlet, } from '@angular/router';
import { Footer } from './components/footer/footer';
import { StarfieldBg } from './components/starfield-bg/starfield-bg';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, StarfieldBg, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }