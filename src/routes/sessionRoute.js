const express = require("express");
const router = express.Router();
const controller = require("../controllers/sessionController");

router.post("/", controller.acessToken);

module.exports = router;
