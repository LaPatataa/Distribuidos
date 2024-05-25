export interface Llamada {
    idLlamada: number;
    fechaHora: string;
    duracionLlamada: string;
    cliente: {
        idCliente: number;
        nombreCliente: string;
    };
    agente: {
        idAgente: number;
        campana: {
            idCampana: number;
            descripcionCampana: string;
        };
        nombreAgente: string;
    };
}