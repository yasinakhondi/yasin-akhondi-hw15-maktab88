const data = require("../db/data.json");
const { writeFile } = require("node:fs/promises");
const path = require("path");

const signUp = async (req, res) => {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.email ||
    !req.body.gender
  )
    return res.send("field is empty");

  let regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{8,}$/;
  if (!regpass.test(req.body.password))
    return res.send("password is erooor!!!!!!!!");

  let findeUsername = data.find((x) => x.username == req.body.username);
  if (findeUsername) return res.send("userName is repetitive !!!!!!!!");
  if (req.body.gender == "gender..") req.body.gender = "not-set";

  data.push(req.body);
  await writeFile(
    path.join(__dirname, "../db/data.json"),
    JSON.stringify(data, null, 2)
  );

  res.render("login-page");
};

module.exports = { signUp };
