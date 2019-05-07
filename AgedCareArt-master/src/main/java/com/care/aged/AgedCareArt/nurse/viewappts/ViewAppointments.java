package com.care.aged.AgedCareArt.nurse.viewappts;

import com.care.aged.AgedCareArt.nurse.appoints.Appointments;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ViewAppointments {


	private List<Appointments> appointments = createList();

	@RequestMapping(value = "/appointments", method = RequestMethod.GET, produces = "application/json")
	public List<Appointments> secondPage() {
		return appointments;
	}
	
	@PostMapping
	public Appointments create(@RequestBody Appointments booking) {
		appointments.add(booking);
		System.out.println(appointments);
		return booking;
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