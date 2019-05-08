package com.care.aged.AgedCareArt.jpa;

import com.care.aged.AgedCareArt.entity.HealthRecord;
import com.care.aged.AgedCareArt.protocol.patient.PatientResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface HealthRecordRepository extends JpaRepository<HealthRecord, Long> {
    List<HealthRecord> findByPatientId(Long patientId);
}
