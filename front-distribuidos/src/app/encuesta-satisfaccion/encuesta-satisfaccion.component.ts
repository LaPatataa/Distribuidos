import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/Backend.service';
import { EncuestaSatisfaccion } from '../interfaze/EncuestaSatisfaccionEntity';

@Component({
  selector: 'app-encuestas-satisfaccion',
  templateUrl: './encuesta-satisfaccion.component.html',
  styleUrls: ['./encuesta-satisfaccion.component.css']
})
export class EncuestasSatisfaccionComponent implements OnInit {
  encuestasSatisfaccion: EncuestaSatisfaccion[] = [];
  agentes: string[] = [];
  campanas: string[] = [];
  agentesSeleccionados: string[] = [];
  campanasSeleccionadas: string[] = [];
  mostrarFiltros: boolean = false;
  calificaciones: number[] = [];
  calificacionesSeleccionadas: number[] = [];

  constructor(private backendService: BackendService) { }

  toggleFiltros() {
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  ngOnInit(): void {
    this.backendService.getEncuestasSatisfaccion().subscribe(
      data => {
        this.encuestasSatisfaccion = data;
        this.agentes = [...new Set(this.encuestasSatisfaccion.map(encuesta => encuesta.agente.nombreAgente))];
        this.campanas = [...new Set(this.encuestasSatisfaccion.map(encuesta => encuesta.agente.campana.descripcionCampana))];
        this.calificaciones = [...new Set(this.encuestasSatisfaccion.map(encuesta => encuesta.calificacion))];
        this.calificacionesSeleccionadas = [...this.calificaciones];
        this.agentesSeleccionados = [...this.agentes];
        this.campanasSeleccionadas = [...this.campanas];
      },
      error => console.error('Error al obtener las encuestas de satisfacción', error)
    );
  }

  toggleCalificacion(calificacion: number): void {
    if (this.calificacionesSeleccionadas.includes(calificacion)) {
      this.calificacionesSeleccionadas = this.calificacionesSeleccionadas.filter(c => c !== calificacion);
    } else {
      this.calificacionesSeleccionadas.push(calificacion);
    }
  }  

  toggleAgente(agente: string): void {
    if (this.agentesSeleccionados.includes(agente)) {
      this.agentesSeleccionados = this.agentesSeleccionados.filter(a => a !== agente);
    } else {
      this.agentesSeleccionados.push(agente);
    }
  }

  toggleCampana(campana: string): void {
    if (this.campanasSeleccionadas.includes(campana)) {
      this.campanasSeleccionadas = this.campanasSeleccionadas.filter(c => c !== campana);
    } else {
      this.campanasSeleccionadas.push(campana);
    }
  }

  isAgenteSeleccionado(agente: string): boolean {
    return this.agentesSeleccionados.includes(agente);
  }

  isCampanaSeleccionada(campana: string): boolean {
    return this.campanasSeleccionadas.includes(campana);
  }

  isCalificacionSeleccionada(calificacion: number): boolean {
    return this.calificacionesSeleccionadas.includes(calificacion);
  }
}
