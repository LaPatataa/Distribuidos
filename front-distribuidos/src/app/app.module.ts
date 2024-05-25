import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestasSatisfaccionComponent } from './encuesta-satisfaccion/encuesta-satisfaccion.component';
import { InicioComponent } from './inicio/inicio.component';
import { VolumenVentasComponent } from './volumen-ventas/volumen-ventas.component';
import { LlamadasComponent } from './llamadas/llamadas.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    EncuestasSatisfaccionComponent,
    InicioComponent,
    VolumenVentasComponent,
    LlamadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BaseChartDirective,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
