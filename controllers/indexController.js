const { body, validationResult } = require("express-validator");

const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log(`Usernames received: ${usernames ? true : false}`);
  console.log("Usernames: " + usernames.map(user => user.username).join(", "));

  return usernames
//   res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

const handleFormSubmit = async (req, res) => {
  console.log(`Form submit event triggered`);
  const username = req.body.username;
  console.log(`username: ${username}`);

  // test:
  console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
};

module.exports = { 
    handleFormSubmit,
     getUsernames };
