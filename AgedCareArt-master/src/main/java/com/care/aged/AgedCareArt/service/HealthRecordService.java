package com.care.aged.AgedCareArt.service;

import com.care.aged.AgedCareArt.entity.HealthRecord;
import com.care.aged.AgedCareArt.jpa.HealthRecordRepository;
import com.care.aged.AgedCareArt.patient.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HealthRecordService implements GenericService<HealthRecord, Long> {

    private final HealthRecordRepository healthRecordRepository;
    private final PatientService patientService;

    public HealthRecordService(final HealthRecordRepository healthRecordRepository,
                               final PatientService patientService) {
        this.healthRecordRepository = healthRecordRepository;
        this.patientService = patientService;
    }

    @Override
    public Long getId(HealthRecord entity) {
        return entity.getHealthId();
    }

    @Override
    public CrudRepository<HealthRecord, Long> getRepository() {
        return this.healthRecordRepository;
    }

    public List<HealthRecord> getByPatientId(Long patientId) {
        return healthRecordRepository.findByPatientId(patientId);
    }

    public HealthRecord save(HealthRecord healthRecord, Long patientId) {
        Optional<Patient> optional = patientService.get(patientId);
        HealthRecord hr = null;
        if (optional.isPresent()) {
            Patient patient = optional.get();
            patient.setHealthRecord(healthRecord);
            patient = patientService.save(patient);
            hr = patient.getHealthRecord();
        }
        return hr;
    }
}
