package com.hospital.doclogin.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.doclogin.models.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

}
