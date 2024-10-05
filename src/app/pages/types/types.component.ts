import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TcgCardComponent } from '../../components/tcg-card/tcg-card.component';
import { TcgService } from '../../services/tcg.service';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule, TcgCardComponent],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {
  types: any[] = [];
  cards: any[] = [];
  private tcgservice = inject(TcgService);
  constructor() {
    this.byType('fairy');
    this.tcgservice.getTypes().subscribe((respuesta:any) => {
      console.log(respuesta);
      this.types = respuesta.data;
    })
  }
  byType(type: string){
    this.tcgservice.getCardsByType(type).subscribe((respuesta:any) => {
      console.log(respuesta);
      this.cards = respuesta.data;
    });
  }
}
