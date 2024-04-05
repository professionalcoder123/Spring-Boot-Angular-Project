package com.hospital.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.models.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

}
