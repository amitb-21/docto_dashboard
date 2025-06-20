package com.example.Doctor_Dashboard.repo;

import com.example.Doctor_Dashboard.utils.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> { }
