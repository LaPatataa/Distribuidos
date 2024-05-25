package com.geovanny.code.controller;

import com.geovanny.code.model.EncuestaSatisfaccionEntity;
import com.geovanny.code.model.LlamadaEntity;
import com.geovanny.code.model.VolumenVentasEntity;
import com.geovanny.code.repository.EncuestaSatisfaccionRepository;
import com.geovanny.code.repository.LlamadaRepository;
import com.geovanny.code.repository.VolumenVentasRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@RestController
@RequestMapping("/inteligencianegocios")
public class AllApiController {

    @Autowired
    private LlamadaRepository llamadaRepository;

    @Autowired
    private VolumenVentasRepository volumenVentasRepository;

    @Autowired
    private EncuestaSatisfaccionRepository encuestaSatisfaccionRepository;

    @GetMapping("/llamadas")
    public ResponseEntity<List<LlamadaEntity>> getLlamadas() {
        List<LlamadaEntity> llamadas = llamadaRepository.findAll();
        return ResponseEntity.ok(llamadas);
    }   @GetMapping("/volumen_ventas")
    public ResponseEntity<List<VolumenVentasEntity>> getVolumenVentas() {
        List<VolumenVentasEntity> ventas = volumenVentasRepository.findAll();
        return ResponseEntity.ok(ventas);
    }

    @GetMapping("/encuestas_satisfaccion")
    public ResponseEntity<List<EncuestaSatisfaccionEntity>> getEncuestasSatisfaccion() {
        List<EncuestaSatisfaccionEntity> encuestas = encuestaSatisfaccionRepository.findAll();
        return ResponseEntity.ok(encuestas);
    }
}
