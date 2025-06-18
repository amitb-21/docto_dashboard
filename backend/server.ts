import express from "express";
import userRoutes from "../backend/routes/auth";
import doctorRoutes from "../backend/routes/doctor"
import recordRoutes from "../backend/routes/record";
const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/doctor",doctorRoutes);
app.use("/api/records/",recordRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
