const express = require("express");
const app = express();

app.set("view engine", "ejs");
const routersignin = require("./routes/signUp");
const routerlogin = require("./routes/login");

const data = require("./db/data.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", routersignin);
app.use("/", routerlogin);

app.listen(9500);
