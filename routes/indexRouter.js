const {Router} = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log("Usernames will be logged here");
    res.send("PostgreSQL lesson");
  });

  indexRouter.get("/kevin", (req, res) => res.send("Kevin is cool"));



  module.exports = indexRouter;