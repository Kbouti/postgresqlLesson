const pool = require("./pool");

async function getAllUsernames() {
  console.log(`getAllusernames function triggered`);
  const { rows } = await pool.query("select * from usernames");
  return rows;
}

// **************************************************************************************************
async function querySearchResults(searchTerm) {
  console.log(`Performing query for ${searchTerm}`);

//   BOOOM, this is the syntax we needed. sql is picky, it needs single quotes. So we can't use template literal
const { rows } = await pool.query(
    "select * from usernames where username = '" + searchTerm + "';"
  );

console.log("poop");

  if (rows) {
    rows.forEach((row) => console.log(row));
  } else {
    console.log(`Search for ${searchTerm} returned no results`);
  }

  //   return rows;
}
// **************************************************************************************************

async function insertUsername(username) {
  await pool.query("insert into usernames (username) values ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
  querySearchResults,
};
