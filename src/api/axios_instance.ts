import axios from "axios";

export const tweetSonaApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  timeout: 2000000,
  headers: {
    "Content-Type": "application/json", // Default for JSON APIs
  },
  withCredentials: true,
});
