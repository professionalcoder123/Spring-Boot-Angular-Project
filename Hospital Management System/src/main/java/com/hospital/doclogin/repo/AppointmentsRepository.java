package com.hospital.doclogin.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.doclogin.models.Appointment;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointment, Long> {

}
