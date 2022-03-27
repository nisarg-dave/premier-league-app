import axios from "axios";

const instance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "cdb61658351d82c1a1a0764a715b7f7c",
  },
});

export default instance;
