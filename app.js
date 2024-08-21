const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("PostgreSQL lesson"));

// app.get("/new", )



// const formController = [
    
// ]



const PORT = 3000;
app.listen(PORT);