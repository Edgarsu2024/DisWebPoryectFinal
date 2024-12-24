import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-graficos',
  standalone: true,  // Componente standalone
  imports: [CanvasJSAngularChartsModule],  // Asegúrate de importar CanvasJS aquí
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  chartOptions: any = {
    title: {
      text: "TOP DE LOS HELADOS MÁS CONSUMIDOS"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "HELADO DE CHOCOLATE", y: 100 },
        { label: "HELADO DE VAINILLA", y: 150 },
        { label: "HELADO DE FRESA", y: 250 },
        { label: "HELADO DE MANGO", y: 300 },
        { label: "HELADO DE CHOCOLATE CON NUEZ", y: 280 }
      ]
    }]
  };
}
