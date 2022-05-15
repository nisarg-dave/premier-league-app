import express from "express";
import { check } from "express-validator";
import axios from "../axios.js";
import { checkAuth } from "../middleware/checkAuth.js";
import requests from "../requests.js";

const router = express.Router();

router.get("/scorers", checkAuth, async (req, res) => {
  const { data } = await axios.get(requests.fetchTopScorers);
  const { response } = data;
  const topScorersArr = response.map((obj) => {
    const playerPhoto = obj?.player?.photo;
    const playerName = obj?.player?.name;
    const team = obj?.statistics[0]?.team?.logo;
    const appearences = obj?.statistics[0]?.games?.appearences;
    const goals = obj?.statistics[0]?.goals?.total;
    return { playerPhoto, playerName, team, appearences, goals };
  });

  return res.json(topScorersArr);
});

router.get("/assists", checkAuth, async (req, res) => {
  const { data } = await axios.get(requests.fetchTopAssists);
  const { response } = data;
  const topAssitsArr = response.map((obj) => {
    const playerPhoto = obj?.player?.photo;
    const playerName = obj?.player?.name;
    const team = obj?.statistics[0]?.team?.logo;
    const appearences = obj?.statistics[0]?.games?.appearences;
    const assists = obj?.statistics[0]?.goals?.assists;
    return { playerPhoto, playerName, team, appearences, assists };
  });

  return res.json(topAssitsArr);
});

export default router;
