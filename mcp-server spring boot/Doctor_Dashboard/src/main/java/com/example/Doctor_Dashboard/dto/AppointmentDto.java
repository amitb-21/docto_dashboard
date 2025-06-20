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
public class AppointmentDto {
    private String id;
    private String patientId;
    private String doctorId;
    private LocalDateTime timestamp;
    private String notes;
}
