import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { PerempleadosComponent } from './paginas/perempleados/perempleados.component';
import { GraficosComponent } from './pages/graficos/graficos.component';  // Asegúrate de que la ruta es correcta

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    PerempleadosComponent
  ],
  imports: [
    BrowserModule,
    CanvasJSAngularChartsModule,
    AppRoutingModule,
    GraficosComponent  // Importa el componente standalone aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
