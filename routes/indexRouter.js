const { Router } = require("express");

const indexRouter = Router();

const indexController = require("../controllers/indexController");

indexRouter.get("/", async (req, res) => {
  const usernames = await indexController.getUsernames();
  res.render("../views/index", { title: "PostgreSQL Lesson", usernames });
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

indexRouter.post("/search", (req, res) => {
  const searchTerm = req.body.searchTerm;
  console.log(`Search post route activated, searchTerm: ${searchTerm}`);

  // So next we need to search our database for the search term. We'll need to invoke a dbquery function.
  // We can write the function there and require and call it here.

  res.redirect("/");
});

indexRouter.get("/kevin", (req, res) => res.send("Kevin is cool"));

module.exports = indexRouter;
