import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  recetas = [
    { nombre: 'Tostada de Aguacate', descripcion: 'Pan tostado con puré de aguacate, sal y pimienta.' },
    { nombre: 'Ensalada Griega', descripcion: 'Tomate, pepino, cebolla, aceitunas y queso feta.' },
    { nombre: 'Batido de Frutas', descripcion: 'Mezcla de plátano, fresas y leche.' },
  ];
}
