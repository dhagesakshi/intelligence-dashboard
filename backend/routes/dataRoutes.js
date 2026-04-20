const express = require("express");
const router = express.Router();
const { getData, uploadData } = require("../controllers/dataController");

// GET data
router.get("/", getData);

// POST upload
router.post("/upload", uploadData);

module.exports = router;