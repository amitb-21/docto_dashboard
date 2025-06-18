import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        default: "",
    },
    assignedDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
