import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'detail/:id', 
    component: HeroDetailComponent 
  }
];

export default routeConfig;