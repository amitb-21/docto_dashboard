package com.example.Doctor_Dashboard.services;

import com.example.Doctor_Dashboard.dto.PatientDto;
import com.example.Doctor_Dashboard.repo.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PatientService {
    private final PatientRepository patientRepo;

    @Tool(name = "getPatientRecords", description = "Get medical records for a patient")
    public List<PatientDto> getPatientsByDoctor(String doctorId) {
        return patientRepo.findByAssignedDoctor(doctorId).stream()
                .map(p -> PatientDto.builder()
                        .id(p.getId())
                        .name(p.getName())
                        .dob(p.getDob())
                        .gender(p.getGender())
                        .contactInfo(p.getContactInfo())
                        .assignedDoctor(p.getAssignedDoctor())
                        .build())
                .collect(Collectors.toList());
    }
}
