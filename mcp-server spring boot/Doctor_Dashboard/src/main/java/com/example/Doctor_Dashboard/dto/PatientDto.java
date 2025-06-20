package com.example.Doctor_Dashboard.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PatientDto {
    private String id;
    private String name;
    private LocalDate dob;
    private String gender;
    private String contactInfo;
    private String assignedDoctor;
}
