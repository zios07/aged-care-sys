package com.care.aged.AgedCareArt.converters;

import com.care.aged.AgedCareArt.entity.Account;
import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.protocol.patient.PatientRequest;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class PatientRequestToPatient implements Converter<PatientRequest, Patient> {

    @Override
    public Patient convert(PatientRequest request) {
        return new Patient(new Account(request.getName(), request.getPassword()));
    }
}
