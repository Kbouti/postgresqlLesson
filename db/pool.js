const { Pool } = require("pg");



module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.DB_USER,
  database: "top_users",
  password: process.env.DB_PASSWORD,
  port: 5432 // The default port
});




// Alternatively, a connection string could be used:

// const { Pool } = require("pg");

// // Again, this should be read from an environment variable
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
