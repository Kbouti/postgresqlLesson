const pool = require("./pool");


async function clearAll(req, res) {
    console.log(`Clearing all entries`);
    await pool.query("delete from usernames *");
    return;
}


module.exports = {
    clearAll
}