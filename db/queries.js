const pool = require("./pool");

async function getAllUsernames() {
    const {rows } = await pool.query("select * from usernames");
    return rows;
}


async function insertUsername(username) {
    await pool.query("insert into usernames (username) values ($1)", [username]);
}

module.exports = {
    getAllUsernames,
    insertUsername
};