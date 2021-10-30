const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');

const db = require("./database/db");
const dataRoute = require("./Routes/dataRoute");

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/data', dataRoute);

app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT} `)
});