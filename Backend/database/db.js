const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const password = encodeURIComponent(process.env.DB_PASSWORD);

const url = `mongodb+srv://${process.env.DB_USER}:${password}@cluster0.xje78.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbConn = mongoose.connection;

dbConn.on("error", console.error.bind(console, "Connection Error"));
dbConn.on("open", function () {
    console.log("DB Connection Successful");
});

module.exports = dbConn;