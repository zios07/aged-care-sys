package com.care.aged.AgedCareArt.nurse.myprof;


import com.care.aged.AgedCareArt.nurse.model.Profile;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MyProf {


	private List<Profile> profiles = createList();

	@RequestMapping(value = "/profile", method = RequestMethod.GET, produces = "application/json")
	public List<Profile> firstPage() {
		return profiles;
	}
	
	
	private static List<Profile> createList() {
		List<Profile> tempProfile = new ArrayList<>();
		Profile profile1 = new Profile();
		profile1.setName("Ednah");
		profile1.setEmail("ednah@gmail.com");
		profile1.setNurseId("001");
		profile1.setMobile("0410");
		tempProfile.add(profile1);
		return tempProfile; 
	}

}