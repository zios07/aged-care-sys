package com.care.aged.AgedCareArt;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.care.aged.AgedCareArt.entity.Account;
import com.care.aged.AgedCareArt.entity.HealthRecord;
import com.care.aged.AgedCareArt.entity.Role;
import com.care.aged.AgedCareArt.entity.User;
import com.care.aged.AgedCareArt.jpa.UserRepository;
import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.patient.PatientRepository;
import com.care.aged.AgedCareArt.service.IRoleService;
import com.care.aged.AgedCareArt.service.IUserService;

@SpringBootApplication
@EnableJpaRepositories
public class AgedCareArtApplication implements CommandLineRunner {

	@Autowired
	private IRoleService roleService;

	@Autowired
	private IUserService userService;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PatientRepository patientRepository;

	private Role nurseRole;
	private Role doctorRole;
	private Role patientRole;

	public static void main(String[] args) {
		SpringApplication.run(AgedCareArtApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		roleService.createRole(new Role("ADMIN", "Administrator"));
		patientRole = roleService.createRole(new Role("PATIENT", "Patient"));
		doctorRole = roleService.createRole(new Role("DOCTOR", "Doctor"));
		nurseRole = roleService.createRole(new Role("NURSE", "Nurse"));

		if (patientRepository.findAll().isEmpty()) {
			HealthRecord hr1 = new HealthRecord("Health Info 1", "Health summary 1", "Claims 1", "Medicare 1", 19,
					94442);
			HealthRecord hr2 = new HealthRecord("Health Info 2", "Health summary 2", "Claims 2", "Medicare 2", 29,
					12311);
			HealthRecord hr3 = new HealthRecord("Health Info 3", "Health summary 3", "Claims 3", "Medicare 3", 15,
					123123);
			HealthRecord hr4 = new HealthRecord("Health Info 4", "Health summary 4", "Claims 4", "Medicare 4", 21,
					41233);

			Patient patient1 = new Patient("UKOMA", "OKEOMA", "UGONNA", "Male", "Malaria", "Amatem", "+233456677777",
					"19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019", null, null, null, null, hr1);
			Patient patient3 = new Patient("KENTH", "THOMPSON", "JAX", "Male", "Heartbreak", "another wife",
					"+233456677777", "19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019", null, null,
					null, null, hr3);
			Patient patient2 = new Patient("JOHN", "JAMES", "BRIGHT", "Male", "Headache", "Panadol", "+233456677777",
					"19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019", null, null, null, null, hr2);
			Patient patient4 = new Patient("WENDEL", "MENDEL", "FRANCIS", "Female", "Emotional Trauma", "girlnadol",
					"+233456677777", "19/04/2019", "12 melbourne", "Nigeria", "19/04/2019", "19/04/2019", null, null,
					null, null, hr4);
			patientRepository.saveAll(Arrays.asList(patient1, patient2, patient3, patient4));

		}

		if (userRepository.findAll().isEmpty()) {
			User doc = new User();
			doc.setAccount(new Account("doctor", "kaoukabi"));
			doc.setRole(doctorRole);

			User nurse = new User();
			nurse.setAccount(new Account("nurse", "kaoukabi"));
			nurse.setRole(nurseRole);

			User patient = new User();
			patient.setAccount(new Account("patient", "kaoukabi"));
			patient.setRole(patientRole);

			userService.addUser(patient, false);
			userService.addUser(doc, false);
			userService.addUser(nurse, false);
		}
	}
}
