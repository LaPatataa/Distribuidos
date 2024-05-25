package com.geovanny.code.repository;

import com.geovanny.code.model.VolumenVentasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolumenVentasRepository extends JpaRepository<VolumenVentasEntity, Long> {
}
