const mongoose = require("mongoose");
const loadDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("database connected");
  } catch (error) {
    console.log("ERROR while DATABASE Connectivity:", error);
  }
};

module.exports = loadDB;
