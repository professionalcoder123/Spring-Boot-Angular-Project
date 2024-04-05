package com.hospital.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.doclogin.exceptions.AppointmentNotFoundException;
import com.hospital.doclogin.models.Appointment;
import com.hospital.doclogin.repo.AppointmentsRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/hospital/appointments")
public class AppointmentController {
	
	@Autowired
	private AppointmentsRepository appointmentRepo;
	
	@PostMapping("/addAppointment")
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		return appointmentRepo.save(appointment);
	}
	
	@GetMapping("/getAppointments")
	public List<Appointment> getAllAppointments(){
		return appointmentRepo.findAll();
	}
	
	@DeleteMapping("/deleteAppointment/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable long id){
		Appointment appointment=appointmentRepo.findById(id).orElseThrow(()->
		new AppointmentNotFoundException("Appointment not found with id "+id));
		appointmentRepo.delete(appointment);
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}