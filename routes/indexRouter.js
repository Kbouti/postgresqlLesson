const { Router } = require("express");

const indexRouter = Router();

const indexController = require("../controllers/indexController");


indexRouter.get("/", (req, res) => {
  console.log("Usernames will be logged here");
  const usernames = indexController.getUsernames();

  res.render("../views/index", { title: "PostgreSQL Lesson" });
});

indexRouter.get("/new", (req, res) => {
  console.log("/new get request received");
  res.render("../views/form", { title: "New user form" });
});

indexRouter.post("/new", (req, res) => {
  console.log("/new post request received");
  indexController.handleFormSubmit(req, res);
  res.render("../views/index", { title: "Form submitted!" });
});

indexRouter.get("/kevin", (req, res) => res.send("Kevin is cool"));

module.exports = indexRouter;
