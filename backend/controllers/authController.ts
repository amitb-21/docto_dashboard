import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Register a new user (doctor or receptionist)
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Login and generate JWT
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Get current authenticated user
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    // req.user should be set by auth middleware after JWT verification
    const userId = (req as any).user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
//updateUser
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const userId = req.params.id;

    const updates: Partial<{ name: string; email: string; password: string }> = {
      name,
      email,
    };

    if (password) {
      updates.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
//delete User
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

