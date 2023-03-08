const data = require("../db/data.json");

const login = (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.send("field is empty");

  let findUsername = data.find((user) => user.username == req.body.username);

  let findPassword = data.find((user) => user.password == req.body.password);

  if (!findPassword || !findUsername) return res.send("user not found!!!!!!!!");

  res.render("renderProfile", {
    username: req.body.username,
    password: req.body.password,
    email: data.find((x) => x),
    gender: "jjn",
  });
};

module.exports = login;
