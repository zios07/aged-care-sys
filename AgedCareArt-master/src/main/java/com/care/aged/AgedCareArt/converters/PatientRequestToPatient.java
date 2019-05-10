package com.care.aged.AgedCareArt.converters;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.protocol.patient.PatientRequest;

@Component
public class PatientRequestToPatient implements Converter<PatientRequest, Patient> {

    @Override
    public Patient convert(PatientRequest request) {
        return new Patient();
    }
}
