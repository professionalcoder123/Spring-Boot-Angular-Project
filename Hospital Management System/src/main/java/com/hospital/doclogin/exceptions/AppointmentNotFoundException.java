package com.hospital.doclogin.exceptions;

public class AppointmentNotFoundException extends RuntimeException {
	public AppointmentNotFoundException(String message) {
		super(message);
	}
}
