import express from "express";
import axios from "../axios.js";
import requests from "../requests.js";

const router = express.Router();

router.get("/statistics/:id", async (req, res) => {
  console.log(req.params.id);
  const { data } = await axios.get(
    requests.fetchStats + "?id=" + req.params.id
  );

  const { response } = data;
  const fixture = response.map((obj) => {
    const id = obj.fixture.id;
    const date = obj.fixture.date;
    const location = obj.fixture.venue.name;
    const homeTeamLogo = obj.teams.home.logo;
    const homeTeamGoals = obj.goals.home;
    const awayTeamLogo = obj.teams.away.logo;
    const awayTeamGoals = obj.goals.away;
    return {
      id,
      date,
      location,
      homeTeamLogo,
      homeTeamGoals,
      awayTeamLogo,
      awayTeamGoals,
    };
  });
  const { events } = response[0];
  const goals = events.filter((obj) => {
    return obj.type === "Goal";
  });
  const { statistics } = response[0];
  const homeTeamShotsOnTarget = statistics[0].statistics[0].value;
  const homeTeamToalShots = statistics[0].statistics[2].value;
  const homeTeamFouls = statistics[0].statistics[6].value;
  const homeCorners = statistics[0].statistics[7].value;
  const homeTeamPossession = statistics[0].statistics[9].value;
  const awayTeamShotsOnTarget = statistics[1].statistics[0].value;
  const awayTeamToalShots = statistics[1].statistics[2].value;
  const awayTeamFouls = statistics[1].statistics[6].value;
  const awayCorners = statistics[1].statistics[7].value;
  const awayTeamPossession = statistics[1].statistics[9].value;

  const stats = {
    homeTeamShotsOnTarget,
    homeTeamToalShots,
    homeTeamFouls,
    homeCorners,
    homeTeamPossession,
    awayTeamShotsOnTarget,
    awayTeamToalShots,
    awayTeamFouls,
    awayCorners,
    awayTeamPossession,
  };
  const { lineups } = response[0];
  const homeTeamXI = lineups[0].startXI.map((obj) => obj.player.name);
  const homeTeamSubs = lineups[0].substitutes.map((obj) => obj.player.name);
  const awayTeamXI = lineups[1].startXI.map((obj) => obj.player.name);
  const awayTeamSubs = lineups[1].substitutes.map((obj) => obj.player.name);

  const teamLineups = {
    homeTeamXI,
    homeTeamSubs,
    awayTeamXI,
    awayTeamSubs,
  };

  const result = [{ fixture, goals, stats, teamLineups }];
  return res.json(result);
});

export default router;
