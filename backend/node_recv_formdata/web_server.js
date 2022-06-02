const express = require("express");
const upload = require("./upload.js");
const cors = require("cors");

const app = express();
const PORT = 5555;

app.use(express.static("."));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.use(upload);

app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});
