const express = require("express");
const app = express();

require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
// This ^^ is needed to access req.body from the form submission

const path = require("path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
// Needed to serve static assets (css)


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Needed to support ejs view engine

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);




const PORT = 3000;
app.listen(PORT);
