import { Request, Response } from "express";
import MedicalRecord from "../models/MedicalRecord";

// Add a new medical record
export const addMedicalRecord = async (req: Request, res: Response) => {
  try {
    const record = new MedicalRecord(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

// Get all medical records for a patient
export const getMedicalRecordsByPatient = async (req: Request, res: Response) => {
  try {
    const records = await MedicalRecord.find({ patient: req.params.patientId }).populate("doctor");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Get a single medical record by ID
export const getMedicalRecordById = async (req: Request, res: Response) => {
  try {
    const record = await MedicalRecord.findById(req.params.id).populate("doctor");
    if (!record) return res.status(404).json({ error: "Medical record not found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
