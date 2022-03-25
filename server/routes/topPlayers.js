import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/scorers", async (req, res) => {
  const { data } = await axios.get(
    "https://v3.football.api-sports.io/players/topscorers?league=39&season=2021",
    {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "cdb61658351d82c1a1a0764a715b7f7c",
      },
    }
  );
  console.log(data);
  return res.send(data);
});
export default router;
