const express = require("express");
const router = express.Router();

router.get("/upload", (req, res) => {});

router.get("/xhr", (req, res) => {
  console.log("receive xhr");
  console.log(req);
  res.send("response xhr");
});

router.post("/upload", (req, res) => {
  console.log("hello");
});

module.exports = router;
