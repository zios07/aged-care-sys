package com.care.aged.AgedCareArt.controller.v1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
