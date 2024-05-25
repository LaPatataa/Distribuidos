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
@Entity(name = "AGENTE")
public class AgenteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_AGENTE")
    private Integer idAgente;

    @ManyToOne
    @JoinColumn(name = "ID_CAMPANA", referencedColumnName = "ID_CAMPANA")
    private CampanaEntity campana;

    @Column(name = "NOMBRE_AGENTE")
    private String nombreAgente;
}
