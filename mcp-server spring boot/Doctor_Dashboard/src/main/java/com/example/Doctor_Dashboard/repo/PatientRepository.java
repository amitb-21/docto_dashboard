package com.example.Doctor_Dashboard.repo;

import com.example.Doctor_Dashboard.utils.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepository extends MongoRepository<Patient, String> {
    List<Patient> findByAssignedDoctor(String doctorId);
}
