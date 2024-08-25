const { Router } = require("express");

const indexRouter = Router();

const indexController = require("../controllers/indexController");

indexRouter.get("/", async (req, res) => {
  console.log("Usernames will be logged here");
  const usernames = await indexController.getUsernames();
  console.log(`Fetched usernames`);

    // *************************************************************************************
  // Next we should be able to render usernames in our view.
  // *************************************************************************************

  res.render("../views/index", { title: "PostgreSQL Lesson" });
});

indexRouter.get("/new", (req, res) => {
  console.log("/new get request received");
  res.render("../views/form", { title: "New user form" });
});

indexRouter.post("/new", (req, res) => {
  console.log("/new post request received");
  //   Add username to database:
  indexController.createUsername(req, res);
  //   Log all names to make sure it worked:
  indexController.getUsernames;

  //   Return home
  res.redirect("/");
  //   res.render("../views/index", { title: "Form submitted!" });
});

indexRouter.get("/kevin", (req, res) => res.send("Kevin is cool"));

module.exports = indexRouter;
