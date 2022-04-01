import express from "express";
import axios from "../axios.js";
import requests from "../requests.js";

const router = express.Router();

router.get("/fixtures", async (req, res) => {
  const { data } = await axios.get(requests.fetchFixtures);
  const { response } = data;
  const fixtures = response.map((obj) => {
    const date = obj.fixture.date;
    const location = obj.fixture.venue.name;
    const homeTeamLogo = obj.teams.home.logo;
    const homeTeamGoals = obj.goals.home;
    const awayTeamLogo = obj.teams.away.logo;
    const awayTeamGoals = obj.goals.away;
    return {
      date,
      location,
      homeTeamLogo,
      homeTeamGoals,
      awayTeamLogo,
      awayTeamGoals,
    };
  });
  return res.json(fixtures);
});

export default router;
