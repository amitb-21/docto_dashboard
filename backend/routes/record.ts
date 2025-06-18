import express, { Router } from "express";
import {
  addMedicalRecord,
  getMedicalRecordsByPatient,
  getMedicalRecordById,
} from "../controllers/recordController";

const router: Router = express.Router();
router.post("/", addMedicalRecord); 
router.get("/patient/:patientId", getMedicalRecordsByPatient); 
router.get("/:id", getMedicalRecordById);

export default router;
