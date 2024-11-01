import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  recetas = [
    {
      nombre: 'Tostada de Aguacate',
      descripcion: 'Pan tostado con puré de aguacate, sal y pimienta.',
      pasos: [
        'Tostar el pan hasta que esté dorado.',
        'Aplastar el aguacate y untarlo sobre el pan tostado.',
        'Espolvorear con sal y pimienta al gusto.'
      ],
      imagen: 'https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorito: false
    },
    {
      nombre: 'Ensalada Griega',
      descripcion: 'Tomate, pepino, cebolla, aceitunas y queso feta.',
      pasos: [
        'Cortar el tomate, pepino y cebolla en trozos pequeños.',
        'Añadir las aceitunas y el queso feta desmenuzado.',
        'Mezclar y añadir aceite de oliva al gusto.'
      ],
      imagen: 'https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorito: false
    },
    {
      nombre: 'Batido de Frutas',
      descripcion: 'Mezcla de plátano, fresas y leche.',
      pasos: [
        'Cortar el plátano y las fresas en trozos.',
        'Colocar las frutas en la licuadora y añadir leche.',
        'Licuar hasta obtener una mezcla homogénea.'
      ],
      imagen: 'https://plus.unsplash.com/premium_photo-1663126827264-409d695e0be7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorito: false
    },
    {
      nombre: 'Pasta al Pesto',
      descripcion: 'Pasta con salsa de pesto, queso parmesano y nueces.',
      pasos: [
        'Cocinar la pasta hasta que esté al dente.',
        'Mezclar la pasta con la salsa de pesto.',
        'Espolvorear con queso parmesano y nueces picadas.'
      ],
      imagen: 'https://plus.unsplash.com/premium_photo-1661293863488-4bed6c84c77a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorito: false
    }
  ];

  toggleFavorito(receta: any) {
    receta.favorito = !receta.favorito;
  }
}
