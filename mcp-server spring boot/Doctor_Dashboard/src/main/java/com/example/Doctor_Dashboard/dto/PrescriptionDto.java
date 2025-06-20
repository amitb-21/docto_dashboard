package com.example.Doctor_Dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PrescriptionDto {
    private String id;
    private String patientId;
    private String doctorId;
    private List<String> medicationList;
    private String notes;
    private boolean fromAI;
    private Date dateIssued;
}
