package com.geovanny.code.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.Duration;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "LLAMADA")
public class LlamadaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_LLAMADA")
    private Long idLlamada;

    @Column(name = "FECHA_HORA")
    private LocalDateTime fechaHora;

    @Column(name = "DURACION_LLAMADA")
    private Duration duracionLlamada;

    @ManyToOne
    @JoinColumn(name = "ID_CLIENTE", referencedColumnName = "ID_CLIENTE")
    private ClienteEntity cliente;

    @ManyToOne
    @JoinColumn(name = "ID_AGENTE", referencedColumnName = "ID_AGENTE")
    private AgenteEntity agente;
}
