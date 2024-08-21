const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");




const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);




const PORT = 3000;
app.listen(PORT);
