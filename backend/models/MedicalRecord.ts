import mongoose from "mongoose";

const MedicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
      default: "",
    },
    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const MedicalRecord = mongoose.model("MedicalRecord", MedicalRecordSchema);

export default MedicalRecord;
