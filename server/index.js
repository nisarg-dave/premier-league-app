import express from "express";
import cors from "cors";
import topPlayerRoutes from "./routes/topPlayers.js";
import leagueTable from "./routes/leagueTable.js";

const app = express();
app.use(cors());
app.use("/top", topPlayerRoutes);
app.use("/league-table", leagueTable);
app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
