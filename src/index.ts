import express from "express";
import dotenv from "dotenv";
import formRoutes from "./routes/form-routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", formRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
