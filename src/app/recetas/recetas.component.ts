import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Receta {
  nombre: string;
  descripcion: string;
  imagen: string;
  ingredientes: string[];
  pasos: string[];
  calificaciones: number[];
  comentarios: { usuario: string, comentario: string }[];
  favorito: boolean
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  filtro: string = '';
  recetas: Receta[] = [
    {
      nombre: "Tacos",
      descripcion: "Deliciosos tacos mexicanos con carne y salsa.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Tortilla", "Carne", "Queso", "Salsa"],
      pasos: ["Calentar tortilla", "Agregar carne", "Espolvorear queso", "Agregar salsa"],
      calificaciones: [4, 5],
      comentarios: [
        { usuario: "Carlos", comentario: "¡Muy buenos tacos!" },
        { usuario: "Ana", comentario: "Me encantaron." }
      ],
      favorito: false
    },
    {
      nombre: "Pizza Margherita",
      descripcion: "Pizza clásica italiana con tomate, albahaca y mozzarella.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Masa de pizza", "Tomate", "Mozzarella", "Albahaca"],
      pasos: ["Preparar masa", "Agregar tomate y mozzarella", "Hornear", "Añadir albahaca fresca"],
      calificaciones: [5, 5, 4],
      comentarios: [
        { usuario: "Luis", comentario: "Sabor auténtico." },
        { usuario: "Sofía", comentario: "¡Deliciosa y fácil de hacer!" }
      ],
      favorito: false
    },
    {
      nombre: "Sushi",
      descripcion: "Sushi casero con arroz, pescado y vegetales.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Arroz", "Nori", "Pescado", "Pepino", "Aguacate"],
      pasos: ["Preparar arroz", "Colocar nori y arroz", "Agregar pescado y vegetales", "Enrollar y cortar"],
      calificaciones: [5, 3, 4],
      comentarios: [
        { usuario: "Karla", comentario: "Muy fresco y delicioso." },
        { usuario: "Tomás", comentario: "¡Un poco complicado de hacer!" }
      ],
      favorito: false
    },
    {
      nombre: "Hamburguesa",
      descripcion: "Hamburguesa clásica con carne, queso y vegetales.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Pan", "Carne", "Queso", "Lechuga", "Tomate"],
      pasos: ["Cocinar carne", "Armar hamburguesa", "Agregar vegetales y queso", "Servir con papas fritas"],
      calificaciones: [5, 5, 4],
      comentarios: [
        { usuario: "Juan", comentario: "¡Perfecta para una tarde!" },
        { usuario: "Lucía", comentario: "Muy sabrosa y fácil de hacer." }
      ],
      favorito: false
    },
    {
      nombre: "Ensalada César",
      descripcion: "Ensalada fresca con lechuga, crutones y aderezo césar.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Lechuga", "Crutones", "Pollo", "Parmesano", "Aderezo César"],
      pasos: ["Preparar lechuga", "Cocinar pollo", "Agregar crutones y aderezo", "Espolvorear queso"],
      calificaciones: [4, 5, 3],
      comentarios: [
        { usuario: "Raúl", comentario: "Muy ligera y sabrosa." },
        { usuario: "Marta", comentario: "Perfecta para el almuerzo." }
      ],
      favorito: false
    },
    {
      nombre: "Ramen",
      descripcion: "Sopa japonesa con fideos, caldo y vegetales.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Fideos", "Caldo", "Huevos", "Algas", "Verduras"],
      pasos: ["Hervir caldo", "Cocinar fideos", "Agregar verduras y huevo", "Servir caliente"],
      calificaciones: [5, 4, 5],
      comentarios: [
        { usuario: "Pedro", comentario: "Me recordó a Japón." },
        { usuario: "Sara", comentario: "Increíble para los días fríos." }
      ],
      favorito: false
    },
    {
      nombre: "Paella",
      descripcion: "Plato tradicional español con mariscos y arroz.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Arroz", "Mariscos", "Pimiento", "Guisantes", "Azafrán"],
      pasos: ["Sofreír mariscos", "Agregar arroz y especias", "Cocinar hasta que se absorba el caldo"],
      calificaciones: [5, 5, 4],
      comentarios: [
        { usuario: "Manuel", comentario: "Increíble sabor a mar." },
        { usuario: "Estela", comentario: "Auténtica paella española." }
      ],
      favorito: false
    },
    {
      nombre: "Tarta de Manzana",
      descripcion: "Tarta dulce con manzanas y canela.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Manzanas", "Masa", "Azúcar", "Canela"],
      pasos: ["Preparar masa", "Agregar manzanas con canela", "Hornear"],
      calificaciones: [4, 5, 4],
      comentarios: [
        { usuario: "Laura", comentario: "Dulce y deliciosa." },
        { usuario: "Diego", comentario: "¡Perfecta con helado!" }
      ],
      favorito: false
    },
    {
      nombre: "Falafel",
      descripcion: "Bolitas de garbanzos fritas, típicas del Medio Oriente.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Garbanzos", "Cebolla", "Ajo", "Perejil", "Comino"],
      pasos: ["Mezclar garbanzos y especias", "Formar bolitas", "Freír hasta dorar"],
      calificaciones: [5, 4, 5],
      comentarios: [
        { usuario: "Mohammed", comentario: "¡Muy auténtico!" },
        { usuario: "Elena", comentario: "Crocante y delicioso." }
      ],
      favorito: false
    },
    {
      nombre: "Brownie de Chocolate",
      descripcion: "Brownie húmedo con chocolate y nueces.",
      imagen: "https://media.istockphoto.com/id/943483254/es/vector/dulce-sabrosa-a-la-parrilla-piernas-de-pavo-de-pollo-asado-con-verduras-en-rodajas-patatas.jpg?s=612x612&w=0&k=20&c=PDQQxf_d2yEfENnlVGpOXJg0dexHd-TD8sTjagsWuDc=",
      ingredientes: ["Chocolate", "Mantequilla", "Azúcar", "Harina", "Nueces"],
      pasos: ["Derretir chocolate y mantequilla", "Agregar ingredientes secos", "Hornear"],
      calificaciones: [5, 5, 5],
      comentarios: [
        { usuario: "Valeria", comentario: "¡Tan bueno como en la pastelería!" },
        { usuario: "Álvaro", comentario: "Perfecto para los amantes del chocolate." }
      ],
      favorito: false
    }
  ];

  nuevaCalificacion: number = 0;
  nuevoComentario: string = '';
  usuarioComentario: string = '';

  get recetasFiltradas() {
    if (!this.filtro) {
      return this.recetas;
    }
    return this.recetas.filter(receta =>
      receta.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  toggleFavorito(receta: Receta) {
    receta.favorito = !receta.favorito;
  }

  ngOnInit(): void {
    // Inicializar datos si es necesario
  }

  agregarCalificacion(receta: Receta): void {
    if (this.nuevaCalificacion >= 1 && this.nuevaCalificacion <= 5) {
      receta.calificaciones.push(this.nuevaCalificacion);
      this.nuevaCalificacion = 0;
    } else {
      alert("La calificación debe estar entre 1 y 5");
    }
  }

  calcularPromedio(calificaciones: number[]): number {
    const total = calificaciones.reduce((acc, val) => acc + val, 0);
    return calificaciones.length > 0 ? total / calificaciones.length : 0;
  }

  agregarComentario(receta: Receta): void {
    if (this.usuarioComentario.trim() && this.nuevoComentario.trim()) {
      receta.comentarios.push({
        usuario: this.usuarioComentario,
        comentario: this.nuevoComentario
      });
      this.usuarioComentario = '';
      this.nuevoComentario = '';
    } else {
      alert("Ambos campos son necesarios para comentar");
    }
  }
}
