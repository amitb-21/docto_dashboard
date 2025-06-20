package com.example.Doctor_Dashboard.config;

import com.example.Doctor_Dashboard.services.AppointmentService;
import com.example.Doctor_Dashboard.services.PatientService;
import org.springframework.ai.support.ToolCallbacks;
import org.springframework.ai.tool.ToolCallback;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ToolConfig {

    @Bean
    public List<ToolCallback> mcpToolCallbacks(
            AppointmentService appointmentService,
            PatientService patientService
    ) {
        return List.of(ToolCallbacks.from(appointmentService, patientService));
    }

}
