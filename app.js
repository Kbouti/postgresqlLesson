const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("usernames will be logged here");
  res.send("PostgreSQL lesson");
});

// app.get("/new", )

// const formController = [

// ]

const PORT = 3000;
app.listen(PORT);
