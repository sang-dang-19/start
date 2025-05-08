const express = require("express");

const router = express.Router();

router.get("/ping", (req, res) => {
  res.sendFile("ping.html", { root: __dirname + "/../views" });
});

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/../views" });
});

module.exports = router;
