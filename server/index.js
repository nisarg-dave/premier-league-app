import express from "express";
import cors from "cors";
import topPlayerRoutes from "./routes/topPlayers.js";

const app = express();
app.use(cors());
app.use("/top", topPlayerRoutes);
app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
