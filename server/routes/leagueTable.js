import express from "express";
import axios from "../axios.js";
import requests from "../requests.js";

const router = express.Router();

router.get("/standings", async (req, res) => {
  const { data } = await axios.get(requests.fetchLeagueTable);
  const { response } = data;
  const { standings } = response[0].league;
  const leagueTableArr = standings[0].map((obj) => {
    const position = obj?.rank;
    const clubLogo = obj?.team?.logo;
    const clubName = obj?.team?.name;
    const played = obj?.all?.played;
    const won = obj?.all?.win;
    const drawn = obj?.all?.draw;
    const lost = obj?.all?.lose;
    const goalsFor = obj?.all?.goals?.for;
    const goalsAgainst = obj?.all?.goals?.against;
    const goalsDifference = obj?.goalsDiff;
    const points = obj?.points;
    return {
      position,
      clubLogo,
      clubName,
      played,
      won,
      drawn,
      lost,
      goalsFor,
      goalsAgainst,
      goalsDifference,
      points,
    };
  });
  return res.json(leagueTableArr);
});

export default router;
