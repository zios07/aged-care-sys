package com.care.aged.AgedCareArt.controller.v1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.care.aged.AgedCareArt.entity.HealthRecord;
import com.care.aged.AgedCareArt.service.HealthRecordService;

@RestController
@RequestMapping("v1/health-records")
public class HealthRecordController {

	@Autowired
	private HealthRecordService service;

	@GetMapping("{patientID}")
	public List<HealthRecord> getHealthRecordForPatient(@PathVariable Long patientID) {
		return service.getByPatientId(patientID);
	}

	@PostMapping("{patientId}")
	public HealthRecord createHealthRecord(@PathVariable Long patientId, @RequestBody HealthRecord healthRecord) {
		return service.save(healthRecord, patientId);
	}

}
