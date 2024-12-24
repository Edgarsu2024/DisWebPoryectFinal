import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,  // Puedes dejar esto como 'false', ya que no es standalone
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
}
