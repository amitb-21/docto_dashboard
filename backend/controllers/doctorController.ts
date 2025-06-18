import { Request, Response } from "express";
import Patient from "../models/Patient";
import Referral from "../models/Referral";

// Get all patients assigned to a doctor
export const getAssignedPatients = async (req: Request, res: Response) => {
  try {
    const doctorId = req.params.id;
    const patients = await Patient.find({ assignedDoctor: doctorId });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Get all referrals for a doctor
export const getReferrals = async (req: Request, res: Response) => {
  try {
    const doctorId = req.params.id;
    const referrals = await Referral.find({ toDoctor: doctorId }).populate("patient fromDoctor");
    res.json(referrals);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
