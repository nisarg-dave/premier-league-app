import express from "express";
import cors from "cors";
import topPlayerRoutes from "./routes/topPlayers.js";
import leagueTable from "./routes/leagueTable.js";
import fixtures from "./routes/fixtures.js";
import liveScores from "./routes/liveScores.js";
import stats from "./routes/stats.js";
import teams from "./routes/teams.js";
import authRoutes from "./routes/auth.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo DB");
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/top", topPlayerRoutes);
    app.use("", leagueTable);
    app.use("", fixtures);
    app.use("", liveScores);
    app.use("", stats);
    app.use("", teams);
    app.use("/auth", authRoutes);
    app.listen(3000, () => {
      console.log("Now listening on port 3000");
    });
  })
  .catch((error) => {
    throw new Error(error);
  });
