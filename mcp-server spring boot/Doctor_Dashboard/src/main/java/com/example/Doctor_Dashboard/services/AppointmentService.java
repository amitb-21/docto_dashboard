package com.example.Doctor_Dashboard.services;

import com.example.Doctor_Dashboard.dto.AppointmentDto;
import com.example.Doctor_Dashboard.repo.AppointmentRepository;
import com.example.Doctor_Dashboard.utils.Appointment;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    private final AppointmentRepository appointmentRepo;

    @Tool(name = "createAppointment", description = "Create a new appointment")
    public AppointmentDto createAppointment(String patientId, String doctorId, String timestamp, String notes) {
        Appointment apt = Appointment.builder()
                .patientId(patientId)
                .doctorId(doctorId)
                .timestamp(LocalDateTime.parse(timestamp))
                .notes(notes)
                .build();
        Appointment saved = appointmentRepo.save(apt);
        return AppointmentDto.builder()
                .id(saved.getId())
                .patientId(saved.getPatientId())
                .doctorId(saved.getDoctorId())
                .timestamp(saved.getTimestamp())
                .notes(saved.getNotes())
                .build();
    }
}
