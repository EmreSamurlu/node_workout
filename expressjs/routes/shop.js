const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
router.get("/", (req, res, next) => {
  //This path should be the absolute path to the file
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
