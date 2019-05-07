package com.care.aged.AgedCareArt.controller.v1;

import com.care.aged.AgedCareArt.converters.PatientRequestToPatient;
import com.care.aged.AgedCareArt.converters.PatientToPatientResponse;
import com.care.aged.AgedCareArt.entity.HealthRecord;
import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.protocol.patient.PatientRequest;
import com.care.aged.AgedCareArt.protocol.patient.PatientResponse;
import com.care.aged.AgedCareArt.service.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1/patients")
public class PatientController {

    private final PatientService service;
    private final PatientRequestToPatient patientRequestToPatient;
    private final PatientToPatientResponse patientToPatientResponse;

    public PatientController(
            final PatientService service,
            final PatientRequestToPatient patientRequestToPatient,
            final PatientToPatientResponse patientToPatientResponse) {
        this.service = service;
        this.patientRequestToPatient = patientRequestToPatient;
        this.patientToPatientResponse = patientToPatientResponse;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE, path = "/{name}/getInfo")
    public ResponseEntity<HealthRecord> findAll(@PathVariable("name") String name) {
        Patient patient = service.search(name);
        return new ResponseEntity<>(patient.getHealthRecord(), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public PatientResponse createPatient(@RequestBody Patient p) {
        Patient patient = service.save(p);
        return patientToPatientResponse.convert(patient);
    }

    @RequestMapping("/")
    List<Patient> showAllPatients() {
        List<Patient> listAllPatients = new ArrayList<Patient>();
        listAllPatients = service.showAllPatients();
        return listAllPatients;
    }


}
