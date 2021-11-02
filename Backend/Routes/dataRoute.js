const express = require("express");
const router = express.Router();

const dataController = require("../Controllers/dataController");

const {
    upload
} = require("../middleware/uploadMiddleware");

router.post('/', upload.array('uploadFile'), dataController.addData);

module.exports = router;