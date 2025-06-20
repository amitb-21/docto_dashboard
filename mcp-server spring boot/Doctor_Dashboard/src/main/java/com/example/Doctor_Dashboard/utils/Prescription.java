package com.example.Doctor_Dashboard.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("prescriptions")
public class Prescription {
    @Id
    private String id;
    private String patientId;
    private String doctorId;
    private List<String> medicationList;
    private String notes;
    private boolean fromAI;
    private Date dateIssued;
}