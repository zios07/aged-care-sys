package com.care.aged.AgedCareArt.jpa;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.care.aged.AgedCareArt.nurse.appoints.Appointments;

@Transactional
public interface AppointmentsRepository extends JpaRepository<Appointments, Long> {
}
