require("dotenv").config();

const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("CONNECT TO DB");
  } catch (error) {
    console.log("UNABLE TO CONNECT DB");
  }
};

module.exports = connectMongoDB;
