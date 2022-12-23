const express = require("express");
const cors = require("cors");

const app = express();
const userRouter = require("./feaures/users/user.router");
const connect = require("./config/db");
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

app.listen(8080, async () => {
  await connect();
  console.log("http://localhost:8080");
});
