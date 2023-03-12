const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const { products } = require("./admin");
router.get("/", (req, res, next) => {
  console.log("shop.js", products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
