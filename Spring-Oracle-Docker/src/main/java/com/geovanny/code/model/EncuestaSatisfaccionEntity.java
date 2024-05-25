package com.geovanny.code.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "ENCUESTA_SATISFACCION")
public class EncuestaSatisfaccionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CALIFICACION_ID")
    private Integer calificacionId;

    @ManyToOne
    @JoinColumn(name = "AGENTE_ID", referencedColumnName = "ID_AGENTE")
    private AgenteEntity agente;

    @Column(name = "CALIFICACION")
    private Integer calificacion;

    @ManyToOne
    @JoinColumn(name = "CLIENTE_ID", referencedColumnName = "ID_CLIENTE")
    private ClienteEntity cliente;
}
