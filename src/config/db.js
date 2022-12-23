const mongoose = require("mongoose"); 

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://khushhal:dk35403540@cluster0.k6a7pjj.mongodb.net/b19"
  );
};

module.exports = connect;
