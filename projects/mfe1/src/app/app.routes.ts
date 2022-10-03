import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [ 
        { 
            path: '', 
            component: HomeComponent, 
            pathMatch: 'full'
        },
        { 
            path: 'mfe1', 
            loadChildren: () => import('./home/mfe1.module')
                .then(m => m.Mfe1Module)
        }  
];
