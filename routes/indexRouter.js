const {Router} = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log("Usernames will be logged here");
    // res.send("Router response sent");
    res.render("../views/index", {title: "PostgreSQL Lesson"});


  });

  indexRouter.get("/kevin", (req, res) => res.send("Kevin is cool"));



  module.exports = indexRouter;