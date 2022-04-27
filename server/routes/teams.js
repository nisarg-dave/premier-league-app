import express from "express";
import axios from "../axios.js";
import requests from "../requests.js";

const router = express.Router();

router.get("/teams", async (req, res) => {
  const { data } = await axios.get(requests.fetchTeams);
  const { response } = data;
  const teams = response.map((obj) => obj?.team?.name);
  return res.json(teams);
});

export default router;
