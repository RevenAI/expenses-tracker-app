import axios from "axios";

import {
    API_URI
} from "../src/utils/helpers";

const apiRequest = axios.create({
    baseURL: API_URI,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiRequest;


/* 
starting the local backend server;
npx json-server -p 3500 -w database/expenses.json
*/