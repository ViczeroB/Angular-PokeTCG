import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tcg-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './tcg-card.component.html',
  styleUrl: './tcg-card.component.css'
})
export class TcgCardComponent {
  @Input() pokeCard: any = {};

}
