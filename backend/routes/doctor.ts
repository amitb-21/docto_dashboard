import express, { Router } from "express";
import { getAssignedPatients, getReferrals } from "../controllers/doctorController";

const router: Router = express.Router();
router.get("/:id/patients", getAssignedPatients);
router.get("/:id/referrals", getReferrals);

export default router;
