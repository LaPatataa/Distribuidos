import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/Backend.service';
import { VolumenVentas } from '../interfaze/volumenVentasEntity';
import Chart, { ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-volumen-ventas',
  templateUrl: './volumen-ventas.component.html',
  styleUrls: ['./volumen-ventas.component.css']
})
export class VolumenVentasComponent implements OnInit {
  volumenVentas: VolumenVentas[] = [];
  agentes: string[] = [];
  descripcionesCampana: string[] = [];
  agentesSeleccionados: string[] = [];
  descripcionesCampanaSeleccionadas: string[] = [];
  myChart!: Chart;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getVolumenVentas().subscribe(
      data => {
        this.volumenVentas = data;
        this.agentes = [...new Set(this.volumenVentas.map(venta => venta.agente.nombreAgente))];
        this.descripcionesCampana = [...new Set(this.volumenVentas.map(venta => venta.agente.campana.descripcionCampana))];
        this.dibujarGrafico();
      },
      error => console.error('Error al obtener el volumen de ventas', error)
    );
  }

  actualizarAgentesDisponibles(): void {
    let ventasFiltradas = this.volumenVentas;

    if (this.descripcionesCampanaSeleccionadas.length > 0) {
      ventasFiltradas = ventasFiltradas.filter(venta => this.descripcionesCampanaSeleccionadas.includes(venta.agente.campana.descripcionCampana));
      this.agentes = [...new Set(ventasFiltradas.map(venta => venta.agente.nombreAgente))];
    } else {
      this.agentes = [...new Set(this.volumenVentas.map(venta => venta.agente.nombreAgente))];
    }
  }

  dibujarGrafico(): void {
    let ventasFiltradas = this.volumenVentas;

    if (this.agentesSeleccionados.length > 0) {
      ventasFiltradas = ventasFiltradas.filter(venta => this.agentesSeleccionados.includes(venta.agente.nombreAgente));
    }

    if (this.descripcionesCampanaSeleccionadas.length > 0) {
      ventasFiltradas = ventasFiltradas.filter(venta => this.descripcionesCampanaSeleccionadas.includes(venta.agente.campana.descripcionCampana));
      this.actualizarAgentesDisponibles(); // Actualiza los agentes disponibles según la campaña seleccionada
    }

    const nombresAgentes = ventasFiltradas.map(venta => venta.agente.nombreAgente);
    const ventasPorAgente = ventasFiltradas.map(venta => venta.cantVenta);

    const options: ChartOptions<'bar'> = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const ctx = document.getElementById('graficoBarras') as HTMLCanvasElement;
    if (this.myChart) {
      this.myChart.destroy();
    }
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: nombresAgentes,
        datasets: [{
          label: 'Cantidad de ventas por agente',
          data: ventasPorAgente,
          backgroundColor: 'rgba(75, 192, 192, 0.5)', 
          borderColor: 'rgba(75, 192, 192, 1)', 
          borderWidth: 1
        }]
      },
      options: options
    });
  }

  toggleAgente(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const nombreAgente = checkbox.value;

    if (checkbox.checked) {
      this.agentesSeleccionados.push(nombreAgente);
    } else {
      const index = this.agentesSeleccionados.indexOf(nombreAgente);
      if (index > -1) {
        this.agentesSeleccionados.splice(index, 1);
      }
    }
    this.dibujarGrafico();
  }

  toggleDescripcionCampana(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const descripcionCampaña = checkbox.value;

    if (checkbox.checked) {
      this.descripcionesCampanaSeleccionadas.push(descripcionCampaña);
    } else {
      const index = this.descripcionesCampanaSeleccionadas.indexOf(descripcionCampaña);
      if (index > -1) {
        this.descripcionesCampanaSeleccionadas.splice(index, 1);
      }
    }
    this.dibujarGrafico();
  }
}
