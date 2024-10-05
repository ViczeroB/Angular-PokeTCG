import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TcgCardComponent } from '../../components/tcg-card/tcg-card.component';
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TcgCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: any[] = [];
  private tcgservice = inject(TcgService);
  constructor() { 
    this.tcgservice.getCards().subscribe((respuesta:any) => {
      console.log(respuesta);
      this.cards = respuesta.data;
    });
  }
}
