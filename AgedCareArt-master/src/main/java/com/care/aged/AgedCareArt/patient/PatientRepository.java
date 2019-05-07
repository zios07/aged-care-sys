package com.care.aged.AgedCareArt.patient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@RepositoryRestResource
@CrossOrigin(origins="http://localhost:4200")
public interface  PatientRepository extends JpaRepository<Patient, Long>{

	Optional<Patient> findById(Long id);

    Patient findByFirstname(String fname);

}
