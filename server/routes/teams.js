import express from "express";
import axios from "../axios.js";
import { checkAuth } from "../middleware/checkAuth.js";
import requests from "../requests.js";

const router = express.Router();

router.get("/teams", checkAuth, async (req, res) => {
  const { data } = await axios.get(requests.fetchTeams);
  const { response } = data;
  const teams = response.map((obj) => {
    const teamName = obj?.team?.name;
    const teamLogo = obj?.team?.logo;
    return { teamName, teamLogo };
  });
  return res.json(teams);
});

export default router;
