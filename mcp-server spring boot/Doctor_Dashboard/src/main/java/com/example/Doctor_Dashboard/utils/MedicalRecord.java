package com.example.Doctor_Dashboard.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("medicalRecords")
public class MedicalRecord {
    @Id
    private String id;
    private String patient;
    private String doctor;
    private String diagnosis;
    private String treatment;
    private String notes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}