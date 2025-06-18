import mongoose from "mongoose";

const ReferralSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    fromDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reason: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Referral = mongoose.model("Referral", ReferralSchema);

export default Referral;
