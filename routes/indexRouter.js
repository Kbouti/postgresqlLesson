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

indexRouter.post("/search", async (req, res) => {
  console.log(
    `Search post route activated, searchTerm: ${req.body.searchTerm}`
  );

  const queryResults = await indexController.triggerSearch(req, res);

  if (queryResults == undefined) {
    console.log(`query results undefined`);
    res.redirect("/");
  } else {
    console.log(`queryResults found. `);
    res.render("../views/index", {
      title: "PostgreSQL Lesson",
      usernames: queryResults,
    });
  }
});

indexRouter.get("/delete", (req, res) => {
  indexController.clearAll();
  res.redirect("/");

})


indexRouter.get("*", (req, res) => res.send("Kevin is cool"));


module.exports = indexRouter;
