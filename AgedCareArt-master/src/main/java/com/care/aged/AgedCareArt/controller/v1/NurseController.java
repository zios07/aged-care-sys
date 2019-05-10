package com.care.aged.AgedCareArt.controller.v1;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.care.aged.AgedCareArt.converters.PatientRequestToPatient;
import com.care.aged.AgedCareArt.converters.PatientToPatientResponse;
import com.care.aged.AgedCareArt.entity.Nurse;
import com.care.aged.AgedCareArt.jpa.NurseRepository;
import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.protocol.patient.PatientRequest;
import com.care.aged.AgedCareArt.protocol.patient.PatientResponse;
import com.care.aged.AgedCareArt.service.PatientService;

@RestController
@RequestMapping("/v1/nurses")
public class NurseController {

	private final PatientService service;
	private final NurseRepository nurseRepository;
	private final PatientRequestToPatient patientRequestToPatient;
	private final PatientToPatientResponse patientToPatientResponse;

	public NurseController(final PatientService service, final PatientRequestToPatient patientRequestToPatient,
			final NurseRepository nurseRepository, final PatientToPatientResponse patientToPatientResponse) {
		this.service = service;
		this.nurseRepository = nurseRepository;
		this.patientRequestToPatient = patientRequestToPatient;
		this.patientToPatientResponse = patientToPatientResponse;
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public PatientResponse createPatient(@RequestBody PatientRequest request) {
		Patient patient = service.save(patientRequestToPatient.convert(request));
		return patientToPatientResponse.convert(patient);
	}

	@GetMapping
    public List<Nurse> getNurses() {
    	return nurseRepository.findAll();
	}
}
