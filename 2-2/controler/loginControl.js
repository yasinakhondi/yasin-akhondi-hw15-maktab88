const data = require("../db/data.json");

const login = (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.send("field is empty");

  let findUsername = data.find((user) => user.username == req.body.username);

  let findPassword = data.find((user) => user.password == req.body.password);

  if (!findPassword || !findUsername) return res.send("user not found!!!!!!!!");

  // const targetUser = data.find((user) => user.username == req.body.username);

  const { username, password, email, gender } = data.find(
    (user) => user.username == req.body.username
  );

  res.render("renderProfile", {
    username,
    password,
    email,
    gender,
  });
};

module.exports = login;
