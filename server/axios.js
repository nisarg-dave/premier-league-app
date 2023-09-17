import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const instance = axios.create({
  baseURL: process.env.RAPIDAPI_BASE_URL,
  headers: {
    "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  },
});

export default instance;
