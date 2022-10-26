const express = require("express");
const router = express.Router();
const db = require("../database/quizScriptDb");

// Get Home Page
//Change the render function
//res.redirect(index.html) if user is authenticated
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

// Api calls
router.post("/login", async (req, res) => {
  const resp = await db.login(req?.body || {});
  // res.status(resp.code).send(resp.data);
  res.send(JSON.stringify(resp));
});

module.exports = router;
