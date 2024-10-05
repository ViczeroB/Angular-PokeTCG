import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { FavoritosComponent } from '../../pages/favoritos/favoritos.component';
import { TypesComponent } from '../../pages/types/types.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, HomeComponent, FavoritosComponent, TypesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
