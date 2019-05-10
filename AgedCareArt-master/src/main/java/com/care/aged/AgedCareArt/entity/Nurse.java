package com.care.aged.AgedCareArt.entity;

import com.care.aged.AgedCareArt.patient.Patient;

import javax.persistence.*;
import java.util.List;

@Entity
public class Nurse {

    @Id
    @GeneratedValue
    private Long nurseId;
    private String name;
    @OneToMany(targetEntity = Patient.class, mappedBy = "nurse", fetch = FetchType.EAGER)
    private List<Patient> patients;

    private Long userID;

	private String username;
	
    public Long getNurseId() {
        return nurseId;
    }

    public void setNurseId(Long nurseId) {
        this.nurseId = nurseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Patient> getPatients() {
        return patients;
    }

    public void setPatients(List<Patient> patients) {
        this.patients = patients;
    }

	public Long getUserID() {
		return userID;
	}

	public void setUserID(Long userID) {
		this.userID = userID;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
    
}
