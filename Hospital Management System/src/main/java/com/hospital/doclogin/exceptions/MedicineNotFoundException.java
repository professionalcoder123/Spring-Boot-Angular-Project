package com.hospital.doclogin.exceptions;

public class MedicineNotFoundException extends RuntimeException {
	public MedicineNotFoundException(String message) {
		super(message);
	}
}
