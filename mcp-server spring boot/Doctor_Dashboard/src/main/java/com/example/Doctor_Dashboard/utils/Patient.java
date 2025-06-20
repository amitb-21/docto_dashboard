package com.example.Doctor_Dashboard.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("patients")
public class Patient {
    @Id
    private String id;
    private String name;
    private LocalDate dob;
    private String gender;
    private String contactInfo;
    private String assignedDoctor;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
