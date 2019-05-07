package com.care.aged.AgedCareArt.converters;

import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.protocol.patient.PatientRequest;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class PatientRequestToPatient implements Converter<PatientRequest, Patient> {

    @Override
    public Patient convert(PatientRequest request) {
        Patient patient = new Patient();
        patient.setFirstname(request.getName());
//        patient.setPassword(request.getPassword());
        return patient;
    }
}
