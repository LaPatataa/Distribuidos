import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasSatisfaccionComponent } from './encuesta-satisfaccion/encuesta-satisfaccion.component';
import { LlamadasComponent } from './llamadas/llamadas.component';
import { InicioComponent } from './inicio/inicio.component';
import { VolumenVentasComponent } from './volumen-ventas/volumen-ventas.component';

const routes: Routes = [
  { path: 'encuesta',component: EncuestasSatisfaccionComponent}
  ,{ path: 'llamadas',component: LlamadasComponent}
  ,{ path: 'inicio',component: InicioComponent}
  ,{ path: 'ventas',component: VolumenVentasComponent}
  ,{ path: '',redirectTo: '/inicio',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
