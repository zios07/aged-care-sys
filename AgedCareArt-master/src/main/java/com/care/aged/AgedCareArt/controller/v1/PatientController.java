package com.care.aged.AgedCareArt.controller.v1;

import com.care.aged.AgedCareArt.patient.Disease;
import com.care.aged.AgedCareArt.patient.DiseaseRepository;
import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.patient.PatientRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("v1/patients")
public class PatientController {
    private PatientRepository patientRepository;
    private DiseaseRepository diseaseRepository;

    public PatientController(PatientRepository patientRepository) {
        // super();
        this.patientRepository = patientRepository;
    }

    @GetMapping("prestigious")
    public Collection<Patient> prestigiousPatients() {
        return patientRepository.findAll().stream().filter(this::isPrestigious).collect(Collectors.toList());
    }

    public boolean isPrestigious(Patient patient) {
        return !patient.getSurname().equalsIgnoreCase("Brrack Obama") && !
                patient.getSurname().equalsIgnoreCase("Donald Trump");
    }


    //HERE IS RESPONSIBLE FOR THE SEARCH FUNCTION
    @GetMapping("search/{id}")
    public Collection<Patient> getAPatient(@PathVariable("id") Long id) {
        List<Patient> aPatientList = null;
        Patient tmpPatient = null;
        tmpPatient = patientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found"));
        aPatientList = new ArrayList<>();
        aPatientList.add(tmpPatient);
        return aPatientList;
    }

    // RESERVED FOR FUTURE USE
    @GetMapping("{id}")
    public Patient getPatient(@PathVariable("id") Long id) {
        return patientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found"));
    }

    public Collection<Disease> allRecordedDiseases() {
        return diseaseRepository.findAll().stream().filter(this::areAllAvailableDrugs).collect(Collectors.toList());
    }

    public boolean areAllAvailableDrugs(Disease disease) {
        boolean isAvailableDrugForDisease = false;
        isAvailableDrugForDisease = disease.getSymptom().contains("Fever") || disease.getSymptom().contains("Headache") ? true : false;
        return isAvailableDrugForDisease;
    }

}
