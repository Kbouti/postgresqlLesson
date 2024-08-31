const { body, validationResult } = require("express-validator");

const db = require("../db/queries");
const deleteAll = require("../db/delete");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log(`Usernames received: ${usernames ? true : false}`);
  console.log(
    "Usernames: " + usernames.map((user) => user.username).join(", ")
  );
  return usernames;
  //   res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsername(req, res) {
  const { username } = req.body;
  //   Note we could also access username with:
  // const username = req.body.username;

  console.log(`Creating username: ${username}`);
  await db.insertUsername(username);
}

async function triggerSearch(req, res) {
  const searchTerm = req.body.searchTerm;
  const queryResults = await db.querySearchResults(searchTerm);
  return queryResults;
}

async function clearAll(req, res) {
  console.log(`deleting`);
  deleteAll.clearAll(req, res);
  return;
}

module.exports = {
  getUsernames,
  createUsername,
  triggerSearch,
  clearAll,
};
