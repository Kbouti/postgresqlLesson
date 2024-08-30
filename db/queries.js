const pool = require("./pool");

async function getAllUsernames() {
  console.log(`getAllusernames function triggered`);
  const { rows } = await pool.query("select * from usernames");
  return rows;
}

// **************************************************************************************************
async function querySearchResults(searchTerm) {
  console.log(`Performing query for ${searchTerm}`);

  const { rows } = await pool.query(
    `select * from usernames if exists where username = "${searchTerm}";`
  );

// const { rows } = await pool.query(
//     `select * from usernames;`
//   );



  // **************************************************************************************************
  // Next we need to perform the sql search and return our results.
  //   Brush up on sql so we can get what we need out of ^^that

//   We're getting an error because the search results aren't found. Even if we're searching for something that should be found. 
// We need to: 
// -Not return an error when our search term isn't found. 
// -Actually return results when we search for a term that exists


  // **************************************************************************************************
  if (rows) {
    rows.forEach((row) => console.log(row));
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
