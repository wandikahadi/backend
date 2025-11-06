import express from "express";
import cors from "cors";
import router from "./routes.js";
import dotenv from "dotenv";


dotenv.config({ path: ".env.dev" });
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend running on port ${port}`));
