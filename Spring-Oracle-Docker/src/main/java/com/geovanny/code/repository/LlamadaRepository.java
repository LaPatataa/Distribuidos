package com.geovanny.code.repository;
import com.geovanny.code.model.LlamadaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LlamadaRepository extends JpaRepository<LlamadaEntity, Long> {
}