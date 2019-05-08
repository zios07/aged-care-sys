package com.care.aged.AgedCareArt.service;

import com.care.aged.AgedCareArt.entity.HealthRecord;
import com.care.aged.AgedCareArt.jpa.HealthRecordRepository;
import com.care.aged.AgedCareArt.protocol.patient.PatientResponse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthRecordService implements GenericService<HealthRecord, Long> {

    private final HealthRecordRepository healthRecordRepository;

    public HealthRecordService(final HealthRecordRepository healthRecordRepository) {
        this.healthRecordRepository = healthRecordRepository;
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
}
