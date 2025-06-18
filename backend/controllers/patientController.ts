import { Request, Response } from "express";
import Patient from "../models/Patient";

// Create a new patient
export const createPatient = async (req: Request, res: Response) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

// Get all patients
export const getPatients = async (req: Request, res: Response) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Get a patient by ID
export const getPatientById = async (req: Request, res: Response) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Update a patient
export const updatePatient = async (req: Request, res: Response) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

// Delete a patient
export const deletePatient = async (req: Request, res: Response) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json({ message: "Patient deleted" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Assign a doctor to a patient
export const assignDoctor = async (req: Request, res: Response) => {
  try {
    const { doctorId } = req.body;
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { assignedDoctor: doctorId },
      { new: true }
    );
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};
