export interface VolumenVentas {
    ventaId: number;
    cantVenta: number;
    agente: {
      idAgente: number;
      campana: {
        idCampana: number;
        descripcionCampana: string;
      };
      nombreAgente: string;
    };
}
  