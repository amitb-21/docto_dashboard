package com.example.Doctor_Dashboard.repo;

import com.example.Doctor_Dashboard.utils.MedicalRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRepository extends MongoRepository<MedicalRecord, String> {
    List<MedicalRecord> findByPatient(String patientId);
}
