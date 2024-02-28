import { Component } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { MessagesComponent } from '../messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroesComponent,MessagesComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title : string = 'Tour of Heroes';
}
