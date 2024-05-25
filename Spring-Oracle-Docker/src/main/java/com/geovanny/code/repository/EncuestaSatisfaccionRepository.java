package com.geovanny.code.repository;

import com.geovanny.code.model.EncuestaSatisfaccionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EncuestaSatisfaccionRepository extends JpaRepository<EncuestaSatisfaccionEntity, Long> {
}
