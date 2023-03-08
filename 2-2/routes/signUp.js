const express = require("express");
const router = express.Router();
const data = require("../db/data.json");
const path = require("path");
const { writeFile } = require("node:fs/promises");
const { signUp } = require("../controler/signUpControl");

router.get("/signUp", (req, res) => {
  res.render("index");
});

router.post("/signUp", signUp);

module.exports = router;
