package com.care.aged.AgedCareArt;

import com.care.aged.AgedCareArt.entity.Doctor;
import com.care.aged.AgedCareArt.entity.HealthRecord;
import com.care.aged.AgedCareArt.entity.Role;
import com.care.aged.AgedCareArt.jpa.HealthRecordRepository;
import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.patient.PatientRepository;
import com.care.aged.AgedCareArt.service.DoctorService;
import com.care.aged.AgedCareArt.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Arrays;

@SpringBootApplication
@EnableJpaRepositories
public class AgedCareArtApplication implements CommandLineRunner {

    @Autowired
    private IRoleService service;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private HealthRecordRepository healthRecordRepository;

    public static void main(String[] args) {
        SpringApplication.run(AgedCareArtApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        service.createRole(new Role("ADMIN", "Administrator"));
        service.createRole(new Role("PATIENT", "Patient"));
        service.createRole(new Role("DOCTOR", "Doctor"));
        service.createRole(new Role("NURSE", "Nurse"));

        if(patientRepository.findAll().isEmpty()) {
            Patient patient1 = new Patient("UKOMA", "OKEOMA", "UGONNA", "Male", "Malaria", "Amatem", "+233456677777", "19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019");
            Patient patient3 = new Patient("KENTH", "THOMPSON", "JAX", "Male", "Heartbreak", "another wife", "+233456677777", "19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019");
            Patient patient2 = new Patient("JOHN", "JAMES", "BRIGHT", "Male", "Headache", "Panadol", "+233456677777", "19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019");
            Patient patient4 = new Patient("WENDEL", "MENDEL", "FRANCIS", "Female", "Emotional Trauma", "girlnadol", "+233456677777", "19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019");
            patientRepository.saveAll(Arrays.asList(patient1, patient2, patient3, patient4));

            healthRecordRepository.save(new HealthRecord("Health Info 1", "Health summary 1", "Claims 1", "Medicare 1", 19, 90923, patientRepository.findByFirstname(patient1.getFirstname())));
            healthRecordRepository.save(new HealthRecord("Health Info 2", "Health summary 2", "Claims 2", "Medicare 2", 19, 90923, patientRepository.findByFirstname(patient1.getFirstname())));
        }

        if (doctorService.findAll().isEmpty()) {
            Doctor doc1 = new Doctor();
            doc1.setDoctorName("Doctor 1");
            doc1.setInfo("Dummy info for doctor 1");

            Doctor doc2 = new Doctor();
            doc2.setDoctorName("Doctor 2");
            doc2.setInfo("Dummy info for doctor 2");

            doctorService.save(doc1);
            doctorService.save(doc2);
        }
    }
}
