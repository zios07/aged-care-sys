package com.care.aged.AgedCareArt.service;


import java.util.List;

import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.patient.PatientRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class PatientService implements GenericService<Patient, Long> {

    private final PatientRepository patientRepository;
    
	List<Patient> listPatients;
	
	public List<Patient> showAllPatients(){
		listPatients=patientRepository.findAll();
		return listPatients;
	}
	

    public PatientService(final PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Long getId(Patient entity) {
        return entity.getId();
    }

    @Override
    public CrudRepository<Patient, Long> getRepository() {
        return this.patientRepository;
    }

    public Patient search(String name) {
        return patientRepository.findByFirstname(name);
    }
}
