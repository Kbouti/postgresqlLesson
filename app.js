const express = require("express");
const app = express();

require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
// This ^^ is needed to access req.body from the form submission

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");




const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);




const PORT = 3000;
app.listen(PORT);
