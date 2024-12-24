import { Component } from '@angular/core';

@Component({
  selector: 'app-perempleados',
  standalone: false,
  templateUrl: './perempleados.component.html',
  styleUrls: ['./perempleados.component.css']
})
export class PerempleadosComponent {
  products = [
    {
      name: 'Cassatta',
      image: 'assets/images/cassatta-chocolate.png',
    },
    {
      name: 'Copa Helada Cappuccino',
      image: 'assets/images/capuccino.png',
    },
    {
      name: 'Copa Helada Frutilla Plátano',
      image: 'assets/images/copa-helada-frutilla-platano.png',
    }, 
    {
      name: 'Delivasito 100ml',
      image: 'assets/images/delivasito.png',
    },
    {
      name: 'Frutarello Cherry',
      image: 'assets/images/frutarello.png',
    },
    {
      name: 'Base Granizado 1L',
      image: 'assets/images/litro-granizado.png',
    },
    {
      name: 'Bombón Crocante 80ml',
      image: 'assets/images/bombon-vanilla.png',
    },
    {
      name: 'Cono',
      image: 'assets/images/cono.png',
    },
    {
      name: 'Brownie',
      image: 'assets/images/tentacion.png',
    },
    {
      name: 'Agua Delizia Sachet 500ml',
      image: 'assets/images/agua-delizia-sachet-500ml.webp',
    },
    {
      name: 'Agua Glaciar 6L',
      image: 'assets/images/agua-glaciar-25l.webp',
    },
    {
      name: 'Agua Glaciar Botella 2.5L',
      image: 'assets/images/agua1-glaciar-25l.webp',
    },
    {
      name: 'Agua Glaciar Botella 600ml',
      image: 'assets/images/agua-glaciar-600ml.webp',
    },
    {
      name: 'Delimón Sachet 200ml',
      image: 'assets/images/delimon-200ml.png',
    },
    {
      name: 'Ice Fruit Botella 2.5L',
      image: 'assets/images/ice-fruit-citrus-25L.webp',
    },
    
  ];
}
