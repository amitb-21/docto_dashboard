"use client";
import React from "react";
import { usePatientContext } from "@/context/PatientContext";

export default function PatientLogPage() {
  const { patients } = usePatientContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Log</h1>
      {patients.length === 0 ? (
        <p className="text-gray-500">No patients added yet.</p>
      ) : (
        <ul className="space-y-4">
          {patients.map((patient) => (
            <li
              key={patient.id}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Condition:</strong> {patient.condition}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
