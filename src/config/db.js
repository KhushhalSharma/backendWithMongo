const mongoose = require("mongoose"); 

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://<name>:<password>@cluster0.k6a7pjj.mongodb.net/b19"
  );
};

module.exports = connect;
