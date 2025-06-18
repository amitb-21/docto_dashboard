import express from "express";
import { login, register, getCurrentUser, updateUser, deleteUser } from "../controllers/authController";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", authenticate, getCurrentUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
