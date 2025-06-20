package com.example.Doctor_Dashboard.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MedicalRecordDto {
    private String id;
    private String patient;
    private String doctor;
    private String diagnosis;
    private String treatment;
    private String notes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
