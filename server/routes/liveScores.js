import express from "express";
import axios from "../axios.js";
import requests from "../requests.js";

const router = express.Router();

router.get("/liveScores", async (req, res) => {
  const { data } = await axios.get(requests.fetchLiveScores);
  const { response } = data;
  const liveScores = response.map((obj) => {
    const id = obj?.fixture?.id;
    const date = obj?.fixture?.date;
    const location = obj?.fixture?.venue?.name;
    const status = obj?.fixture?.status?.elapsed;
    const homeTeamLogo = obj?.teams?.home?.logo;
    const homeTeamGoals = obj?.goals?.home;
    const awayTeamLogo = obj?.teams?.away?.logo;
    const awayTeamGoals = obj?.goals?.away;
    return {
      id,
      date,
      location,
      status,
      homeTeamLogo,
      homeTeamGoals,
      awayTeamLogo,
      awayTeamGoals,
    };
  });
  return res.json(liveScores);
});

export default router;
