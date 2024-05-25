import { Component, OnInit } from '@angular/core';
import { Llamada } from '../interfaze/llamadasEntity';
import { BackendService } from '../services/Backend.service';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.component.html',
  styleUrls: ['./llamadas.component.css']
})
export class LlamadasComponent implements OnInit {
  llamadas: Llamada[] = [];
  duracion: String[] = [];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    
    this.backendService.getLlamadas().subscribe(
      data => {
        this.llamadas = data;
      },
      error => console.error('Error al obtener las llamadas', error)
    );
  }

  parsearDuracion(duracion: string): string {
    const duracionSegundos = parseFloat(duracion.substring(10));
    const duracionMinutos = duracionSegundos / 60;
    const duracionFormateada = duracionMinutos.toFixed(2).replace(/^0\.0*/, '');
    
    return duracionFormateada + ' minutos';
  }

  parsearFecha(fecha: string): string {
    const partesFecha = fecha.split('T');
    const fechaFormateada = partesFecha[0];
    
    return fechaFormateada;
  }
  
}
