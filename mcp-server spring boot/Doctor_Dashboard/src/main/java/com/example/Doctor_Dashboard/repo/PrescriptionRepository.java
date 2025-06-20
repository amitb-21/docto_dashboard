package com.example.Doctor_Dashboard.repo;

import com.example.Doctor_Dashboard.utils.Prescription;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrescriptionRepository extends MongoRepository<Prescription, String> {
    List<Prescription> findByPatientId(String patientId);
}