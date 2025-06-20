"use client";

import React from "react";
import { usePatientContext } from "@/context/PatientContext";
import PatientCard from "@/components/PatientCard";

export default function PatientLogPage() {
  const { patients } = usePatientContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Log</h1>
      {patients.length === 0 && <p>No patients yet.</p>}
      {patients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
}
