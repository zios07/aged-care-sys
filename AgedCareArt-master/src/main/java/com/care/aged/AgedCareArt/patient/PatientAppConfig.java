package com.example.demo;

import com.care.aged.AgedCareArt.patient.Patient;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
public class PatientAppConfig extends RepositoryRestMvcConfiguration {
 
    public PatientAppConfig(ApplicationContext context, ObjectFactory<ConversionService> conversionService) {
		super(context, conversionService);
		// TODO Auto-generated constructor stub
	}

    //APP CONFIGURATION FILE CREATED TO ALLOW CROSS FIELD VALUE ACCESS ON ID
	//@Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		
        config.exposeIdsFor(Patient.class);
    }
}
