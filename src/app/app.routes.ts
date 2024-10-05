import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { TypesComponent } from './pages/types/types.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'favoritos',
        component: FavoritosComponent
    },
    {
        path: 'types',
        component: TypesComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
