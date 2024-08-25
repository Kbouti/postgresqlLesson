const pool = require("./pool");

async function getAllUsernames() {
  console.log(`getAllusernames function triggered`);
  const { rows } = await pool.query("select * from usernames");
  return rows;
}

async function querySearchResults(searchTerm) {
  console.log(`Performing query for ${searchTerm}`);

  // **************************************************************************************************
  // Next we need to perform the sql search and return our results.
  // **************************************************************************************************
}

async function insertUsername(username) {
  await pool.query("insert into usernames (username) values ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
  querySearchResults,
};
