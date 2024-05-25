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
@Entity(name = "CAMPANA")
public class CampanaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CAMPANA")
    private Integer idCampana;

    @Column(name = "DESCRIPCION_CAMPANA")
    private String descripcionCampana;
}
