package com.care.aged.AgedCareArt.patient;

import com.care.aged.AgedCareArt.entity.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@Data
public class Patient {
	@Id
	@GeneratedValue
	private Long id;
	private @NonNull String surname;
	private @NonNull String firstname;
	private @NonNull String lastname;
	private @NonNull String gender;
	private @NonNull String disease;
	private @NonNull String drugs;

	// FIELDS ADDED ON 16/04/2019
	private @NonNull String phone;

	private @NonNull String dateofbirth;
	private @NonNull String address;

	private @NonNull String nationality;
	private @NonNull String diagnosisdate;
	private @NonNull String lastnursevisitdate;

	private String email;
	private String age;
	@ManyToOne
	private Doctor doctor;
	@ManyToOne
	private Nurse nurse;
	@OneToOne(cascade = CascadeType.ALL)
	private HealthRecord healthRecord;
	private String username;
	private Long userID;

	public Patient() {

	}

	public Patient(@NonNull String surname, @NonNull String firstname, @NonNull String lastname, @NonNull String gender,
			@NonNull String disease, @NonNull String drugs, @NonNull String phone, @NonNull String dateofbirth,
			@NonNull String address, @NonNull String nationality, @NonNull String diagnosisdate,
			@NonNull String lastnursevisitdate) {
		this.surname = surname;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.disease = disease;
		this.drugs = drugs;
		this.phone = phone;
		this.dateofbirth = dateofbirth;
		this.address = address;
		this.nationality = nationality;
		this.diagnosisdate = diagnosisdate;
		this.lastnursevisitdate = lastnursevisitdate;
	}

	public Patient(@NonNull String surname, @NonNull String firstname, @NonNull String lastname, @NonNull String gender,
			@NonNull String disease, @NonNull String drugs, @NonNull String phone, @NonNull String dateofbirth,
			@NonNull String address, @NonNull String nationality, @NonNull String diagnosisdate,
			@NonNull String lastnursevisitdate, String email, String age, Doctor doctor, Nurse nurse,
			HealthRecord healthRecord) {
		this.surname = surname;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.disease = disease;
		this.drugs = drugs;
		this.phone = phone;
		this.dateofbirth = dateofbirth;
		this.address = address;
		this.nationality = nationality;
		this.diagnosisdate = diagnosisdate;
		this.lastnursevisitdate = lastnursevisitdate;
		this.email = email;
		this.age = age;
		this.doctor = doctor;
		this.nurse = nurse;
		this.healthRecord = healthRecord;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getDrugs() {
		return drugs;
	}

	public void setDrugs(String drugs) {
		this.drugs = drugs;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getDiagnosisdate() {
		return diagnosisdate;
	}

	public void setDiagnosisdate(String diagnosisdate) {
		this.diagnosisdate = diagnosisdate;
	}

	public String getLastnursevisitdate() {
		return lastnursevisitdate;
	}

	public void setLastnursevisitdate(String lastnursevisitdate) {
		this.lastnursevisitdate = lastnursevisitdate;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Nurse getNurse() {
		return nurse;
	}

	public void setNurse(Nurse nurse) {
		this.nurse = nurse;
	}

	public HealthRecord getHealthRecord() {
		return healthRecord;
	}

	public void setHealthRecord(HealthRecord healthRecord) {
		this.healthRecord = healthRecord;
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