
package com.care.aged.AgedCareArt.service;

import static com.care.aged.AgedCareArt.util.UtilContants.ROLE_CODE_ADMIN;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.care.aged.AgedCareArt.entity.Doctor;
import com.care.aged.AgedCareArt.entity.Nurse;
import com.care.aged.AgedCareArt.entity.User;
import com.care.aged.AgedCareArt.exception.NotFoundException;
import com.care.aged.AgedCareArt.exception.ServiceException;
import com.care.aged.AgedCareArt.jpa.DoctorRepository;
import com.care.aged.AgedCareArt.jpa.NurseRepository;
import com.care.aged.AgedCareArt.jpa.UserRepository;
import com.care.aged.AgedCareArt.patient.Patient;
import com.care.aged.AgedCareArt.patient.PatientRepository;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserRepository repo;

	@Autowired
	private IRoleService roleService;

	@Autowired
	private PatientRepository patientRepo;

	@Autowired
	private NurseRepository nurseRepo;

	@Autowired
	private DoctorRepository doctorRepo;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public User addUser(User user, boolean isAdmin) throws ServiceException {
		if (user.getAccount() != null && user.getAccount().getUsername() != null) {
			if (repo.findByAccountUsername(user.getAccount().getUsername()) != null) {
				throw new ServiceException("USERNAME.ALREADY.EXISTS", "Username already exists");
			}
		}

		if (user.getRole() == null) {
			if (isAdmin) {
				user.setRole(roleService.getRoleAdmin());
			}
		}

		if (user.getAccount() != null) {
			user.getAccount().setPassword(passwordEncoder.encode(user.getAccount().getPassword()));
		}

		User savedUser = repo.save(user);

		if (user.getRole().getRoleCode().equals("PATIENT")) {
			Patient p = new Patient();
			p.setFirstname(savedUser.getFirstName());
			p.setUserID(savedUser.getId());
			p.setUsername(savedUser.getAccount().getUsername());
			patientRepo.save(p);
		} else if (user.getRole().getRoleCode().equals("DOCTOR")) {
			Doctor d = new Doctor();
			d.setDoctorName(savedUser.getFirstName());
			d.setInfo("This is random doctor info");
			d.setUserID(savedUser.getId());
			d.setUsername(savedUser.getAccount().getUsername());
			doctorRepo.save(d);
		} else if (user.getRole().getRoleCode().equals("NURSE")) {
			Nurse n = new Nurse();
			n.setUserID(savedUser.getId());
			n.setName(savedUser.getFirstName());
			n.setUsername(savedUser.getAccount().getUsername());
			nurseRepo.save(n);
		}

		return savedUser;
	}

	@Override
	public User findUser(long id) throws NotFoundException {
		if (!repo.existsById(id))
			throw new NotFoundException("USER.NOT.FOUND", "No user found with id: " + id);
		return repo.findById(id).get();
	}

	@Override
	public List<User> findAllUsers() {
		List<User> users = repo.findAll();
		users.stream().filter(user -> Objects.nonNull(user.getAccount())).collect(Collectors.toList()).forEach(user -> {
			user.getAccount().setPassword(null);
		});
		return users;
	}

	@Override
	public void deleteUser(long id) throws NotFoundException {
		if (!repo.existsById(id))
			throw new NotFoundException("USER.NOT.FOUND", "No user found with id: " + id);
		repo.deleteById(id);
	}

	@Override
	public List<User> searchUsers(User userDto) throws NotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User updateUser(User user) throws NotFoundException {
		if (!repo.existsById(user.getId()))
			throw new NotFoundException("USER.NOT.FOUND", "No user found with id: " + user.getId());
		return repo.save(user);
	}

	@Override
	public User findUserByUsername(String username) throws NotFoundException {
		User user = repo.findByAccountUsername(username);
		if (user == null)
			throw new NotFoundException("USER.NOT.FOUND", "No user found with username: " + username);
		return user;
	}

	@Override
	public List<User> getAdminUser() {
		return repo.findByRoleRoleCode(ROLE_CODE_ADMIN);
	}

	@Override
	public User getByEmail(String email) {
		return repo.findByEmail(email);
	}

}
