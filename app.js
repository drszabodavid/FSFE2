const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Nice work David%%%%%%%");
});

app.get("/teapot", (req, res) => {
  res.send("Nice work teapot");
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
