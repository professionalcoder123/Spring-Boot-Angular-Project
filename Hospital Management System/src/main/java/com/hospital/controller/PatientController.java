package com.hospital.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.exceptions.PatientNotFoundException;
import com.hospital.models.Patient;
import com.hospital.repo.PatientRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/hospital/patients")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepo;
	
	@PostMapping("/addPatient")
	public Patient createPatient(@RequestBody Patient patient) {
		return patientRepo.save(patient);
	}
	
	@GetMapping("/getPatients")
	public List<Patient> getAllPatients(){
		return patientRepo.findAll();
	}
	
	@GetMapping("/getPatient/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable long id){
		Patient patient=patientRepo.findById(id).orElseThrow(()->
		new PatientNotFoundException("Patient not found with id "+id));
		return ResponseEntity.ok(patient);
	}
	
	@DeleteMapping("/deletePatient/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id){
		Patient patient=patientRepo.findById(id).orElseThrow(()->
		new PatientNotFoundException("Patient not found with id "+id));
		patientRepo.delete(patient);
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("Deleted", true);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/updatePatient/{id}")
	public ResponseEntity<Patient> updatePatientById(@PathVariable long id,@RequestBody Patient patientDetails){
		Patient patient=patientRepo.findById(id).orElseThrow(()->
		new PatientNotFoundException("Patient not found with id "+id));
		patient.setName(patientDetails.getName());
		patient.setAge(patientDetails.getAge());
		patient.setBlood_group(patientDetails.getBlood_group());
		patient.setPrescription(patientDetails.getPrescription());
		patient.setDose(patientDetails.getDose());
		patient.setFees(patientDetails.getFees());
		patient.setUrgency(patientDetails.getUrgency());
		Patient updatedPatient=patientRepo.save(patient);
		return ResponseEntity.ok(updatedPatient);
	}
}
