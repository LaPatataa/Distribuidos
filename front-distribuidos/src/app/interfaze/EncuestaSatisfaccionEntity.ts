export interface EncuestaSatisfaccion {
  calificacionId: number;
  agente: {
    idAgente: number;
    campana: {
      idCampana: number;
      descripcionCampana: string;
    };
    nombreAgente: string;
  };
  calificacion: number;
  cliente: {
    idCliente: number;
    nombreCliente: string;
  };
}