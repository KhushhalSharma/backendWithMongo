const express = require("express");
const users = require("./users.schema");
const app = express.Router();

app.get("/", async (req, res) => {
  let u = await users.find();
  res.send(u);
});

app.post("/", async (req, res) => {
  let u = req.body;
  try {
    let newUser = await users.create(u);
    res.send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
