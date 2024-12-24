import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './paginas/acercade/acercade.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { PerempleadosComponent } from './paginas/perempleados/perempleados.component';
import { GraficosComponent } from './pages/graficos/graficos.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'acercade',
    loadComponent: () => import('./paginas/acercade/acercade.component')
      .then(m => m.AcercadeComponent)
  },
  { 
    path: 'lisempleados', 
    loadComponent: () => import('./paginas/lisempleados/lisempleados.component')
      .then(m => m.LisempleadosComponent) 
  },
  { path: 'perempleados', component: PerempleadosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'graficos', loadComponent: () => import('./pages/graficos/graficos.component').then(m => m.GraficosComponent) },

  
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },

  

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
