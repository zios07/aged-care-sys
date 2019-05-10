package com.care.aged.AgedCareArt.nurse.appoints;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.care.aged.AgedCareArt.entity.Doctor;
import com.care.aged.AgedCareArt.entity.Nurse;

@Entity
public class Appointments {

	@Id
	@GeneratedValue
	private Long id;
	private String apptNumber;
	private String apptDate;
	private String apptTime;
	private String clientName;
	private String address;
	private String condition;

	@ManyToOne
	private Nurse nurse;

	@ManyToOne
	private Doctor doctor;

	public Appointments() {
	}

	public String getApptDate() {
		return apptDate;
	}

	public void setApptDate(String apptDate) {
		this.apptDate = apptDate;
	}

	public String getApptTime() {
		return apptTime;
	}

	public void setApptTime(String apptTime) {
		this.apptTime = apptTime;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getClientName() {
		return clientName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public String getApptNumber() {
		return apptNumber;
	}

	public void setApptNumber(String apptNumber) {
		this.apptNumber = apptNumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Nurse getNurse() {
		return nurse;
	}

	public void setNurse(Nurse nurse) {
		this.nurse = nurse;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	
}