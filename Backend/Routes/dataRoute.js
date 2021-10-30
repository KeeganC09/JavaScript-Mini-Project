const express = require("express");
const router = express.Router();

const dataController = require("../Controllers/dataController");

router.post('/', dataController.addData);

module.exports = router;