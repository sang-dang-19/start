const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("API ROUTER")
})

module.exports = router;