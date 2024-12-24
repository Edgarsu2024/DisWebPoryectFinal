import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lisempleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lisempleados.component.html',
  styleUrls: ['./lisempleados.component.css']
})
export class LisempleadosComponent {
  empresaInfo = {
    nombre: 'Empresa de Helados Delicia',
    descripcion: 'Somos una empresa dedicada a la venta de helados artesanales desde 1995.',
    ubicacion: 'Avenida Central, Ciudad Helado'
  };

  empleados = [
    { 
      nombre: 'Juan Pérez', 
      fechaNacimiento: new Date(1985, 5, 15), 
      genero: 'Masculino', 
      nacionalidad: 'Peruana', 
      dni: '12345678', 
      direccion: 'Calle Ficticia 123', 
      telefono: '+51 987654321', 
      correo: 'juan.perez@heladosdelicia.com' 
    },
    { 
      nombre: 'María García', 
      fechaNacimiento: new Date(1990, 10, 22), 
      genero: 'Femenino', 
      nacionalidad: 'Argentina', 
      dni: '87654321', 
      direccion: 'Avenida Central 456', 
      telefono: '+54 912345678', 
      correo: 'maria.garcia@heladosdelicia.com' 
    },
    { 
      nombre: 'Carlos López', 
      fechaNacimiento: new Date(1980, 3, 12), 
      genero: 'Masculino', 
      nacionalidad: 'Colombiana', 
      dni: '11223344', 
      direccion: 'Calle 45 #789', 
      telefono: '+57 987654321', 
      correo: 'carlos.lopez@heladosdelicia.com' 
    },
    { 
      nombre: 'Ana Martínez', 
      fechaNacimiento: new Date(1995, 7, 5), 
      genero: 'Femenino', 
      nacionalidad: 'Chilena', 
      dni: '55667788', 
      direccion: 'Avenida Los Andes 101', 
      telefono: '+56 912345678', 
      correo: 'ana.martinez@heladosdelicia.com' 
    },
    { 
      nombre: 'Luis Fernández', 
      fechaNacimiento: new Date(1988, 1, 18), 
      genero: 'Masculino', 
      nacionalidad: 'Ecuatoriana', 
      dni: '22334455', 
      direccion: 'Calle Quito 300', 
      telefono: '+593 912345678', 
      correo: 'luis.fernandez@heladosdelicia.com' 
    }
  ];

  empleadosDestacados = [
    { nombre: 'Juan Pérez', cargo: 'Vendedor', experiencia: 3 },
    { nombre: 'María García', cargo: 'Gerente', experiencia: 8 },
    { nombre: 'Carlos López', cargo: 'Encargado de Inventario', experiencia: 5 },
    { nombre: 'Ana Martínez', cargo: 'Cajera', experiencia: 2 },
    { nombre: 'Luis Fernández', cargo: 'Supervisor', experiencia: 10 }
  ];
}
