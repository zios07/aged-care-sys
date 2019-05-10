package com.care.aged.AgedCareArt.nurse.viewappts;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.care.aged.AgedCareArt.jpa.AppointmentsRepository;
import com.care.aged.AgedCareArt.nurse.appoints.Appointments;

@RestController
public class ViewAppointments {

	@Autowired
	private AppointmentsRepository repository;

	private List<Appointments> appointments = createList();

	@RequestMapping(value = "/appointments", method = RequestMethod.GET, produces = "application/json")
	public List<Appointments> secondPage() {
		return repository.findAll();
	}

	@PostMapping
	public Appointments create(@RequestBody Appointments booking) {
		appointments.add(booking);
		System.out.println(appointments);
		return repository.save(booking);
	}

	private static List<Appointments> createList() {
		List<Appointments> tempAppointmentClass = new ArrayList<>();
		Appointments appointment1 = new Appointments();
		appointment1.setApptNumber("1");
		appointment1.setApptDate("15/05/2019");
		appointment1.setApptTime("14:00");
		appointment1.setClientName("Sam");
		appointment1.setAddress("24-Kings-Avenue");
		appointment1.setCondition("Severe-Headache");
		tempAppointmentClass.add(appointment1);
		return tempAppointmentClass;
	}

}