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
@Entity(name = "VOLUMEN_VENTAS")
public class VolumenVentasEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VENTA_ID")
    private Long ventaId;

    @Column(name = "CANT_VENTA")
    private Integer cantVenta;

    @ManyToOne
    @JoinColumn(name = "ID_AGENTE", referencedColumnName = "ID_AGENTE")
    private AgenteEntity agente;
}
