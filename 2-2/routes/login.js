const express = require("express");
const router = express.Router();
const login = require("../controler/loginControl");

router.post("/login", login);

router.get("/render", (req, res) => {});

module.exports = router;
