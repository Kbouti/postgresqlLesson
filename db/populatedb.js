#! /usr/bin/env node

const { Client } = require("pg");


require('dotenv').config();


const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");


  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();


// This does not appear to have worked. 
// After running this file with node db/populatedb we should be able to access psql and see our table usernames. we do not. 


// We are advised that we can add it as a script in json. We should try this, might solve our problem. If not a good skill to familiarize. 
//  https://stackoverflow.com/questions/36433461/how-to-add-a-custom-script-to-package-json-that-runs-a-javascript-file/36433748#36433748

// Ok... script added. Should be able to populate db by running: 
// npm run populatedb
