const pool = require("./pool");

async function getAllUsernames() {
  console.log(`getAllusernames function triggered`);
  // ************************************************************************************************************
  const { rows } = await pool.query("select * from usernames");
  // This was our problem. We hadn't created the usernames table
//   It's working now....
  // ************************************************************************************************************
  return rows;
}

async function insertUsername(username) {
  await pool.query("insert into usernames (username) values ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
};
