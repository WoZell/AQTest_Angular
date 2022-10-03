import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mfe2',
    loadChildren: () => import('./home/mfe2.module').then((m) => m.Mfe2Module),
  },
];
