import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  productos = [
    {
      nombre: 'Helado de Fresa',
      descripcion: 'Helado cremoso de fresa natural, perfecto para los amantes de lo dulce y afrutado.',
      precio: 5.00,
      imagen: 'https://via.placeholder.com/300x200?text=Helado+1'
    },
    {
      nombre: 'Helado de Chocolate',
      descripcion: 'Un delicioso helado de chocolate, ideal para los amantes del cacao intenso y suave.',
      precio: 6.00,
      imagen: 'https://via.placeholder.com/300x200?text=Helado+2'
    },
    {
      nombre: 'Helado de Vainilla',
      descripcion: 'Un clásico delicioso, hecho con vainilla natural y una textura suave y cremosa.',
      precio: 5.50,
      imagen: 'https://via.placeholder.com/300x200?text=Helado+3'
    },
    {
      nombre: 'Helado de Mango',
      descripcion: 'Refrescante y tropical, con todo el sabor de mangos frescos y jugosos.',
      precio: 5.75,
      imagen: 'https://via.placeholder.com/300x200?text=Helado+4'
    },
    {
      nombre: 'Helado de Chocolate con Nuez',
      descripcion: 'La combinación perfecta de chocolate con trozos de nuez para un toque crujiente.',
      precio: 6.50,
      imagen: 'https://via.placeholder.com/300x200?text=Helado+5'
    }
  ];
}
