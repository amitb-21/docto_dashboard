import express from "express";
import userRoutes from "../backend/routes/auth";

const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
