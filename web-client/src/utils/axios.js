import axios from "axios";
const dataFetcher = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default dataFetcher;
