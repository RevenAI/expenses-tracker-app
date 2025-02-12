import axios from "axios";
import {
    getEnvUrl
} from "../src/utils/helpers";

const API_URL = getEnvUrl();
const apiRequest = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiRequest;


/* 
starting the local backend server;
npx json-server -p 3500 -w database/expenses.json
*/