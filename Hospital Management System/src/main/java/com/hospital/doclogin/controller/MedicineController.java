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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.doclogin.exceptions.MedicineNotFoundException;
import com.hospital.doclogin.models.Medicine;
import com.hospital.doclogin.repo.MedicineRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/hospital/medicines")
public class MedicineController {
	
	@Autowired
	MedicineRepository medicineRepo;
	
	@PostMapping("/addMedicine")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		return medicineRepo.save(medicine);
	}
	
	@GetMapping("/getMedicines")
	public List<Medicine> getAllMedicines(){
		return medicineRepo.findAll();
	}
	
	@GetMapping("/getMedicine/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable long id){
		Medicine medicine=medicineRepo.findById(id).orElseThrow(()->
		new MedicineNotFoundException("Medicine not found with id "+id));
		return ResponseEntity.ok(medicine);
	}
	
	@PutMapping("/updateMedicine/{id}")
	public ResponseEntity<Medicine> updateMedicine(@PathVariable long id,@RequestBody Medicine medicineDetails){
		Medicine medicine=medicineRepo.findById(id).orElseThrow(()->
		new MedicineNotFoundException("Medicine not found with id "+id));
		medicine.setDrugName(medicineDetails.getDrugName());
		medicine.setStock(medicineDetails.getStock());
		Medicine updatedMedicine=medicineRepo.save(medicine);
		return ResponseEntity.ok(updatedMedicine);
	}
	
	@DeleteMapping("/deleteMedicine/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteMedicine(@PathVariable long id){
		Medicine medicine=medicineRepo.findById(id).orElseThrow(()->
		new MedicineNotFoundException("Medicine not found with id "+id));
		medicineRepo.delete(medicine);
		Map<String,Boolean> response=new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
