// import mongoose from "mongoose";
// import { DB_NAME } from "./containts";
import dotenv from "dotenv";
import connectDB from "./db/data.js";

dotenv.config({
  path: "./env",
});
connectDB();

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App listening on ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("ERROR: ", err);
    throw err;
  }
})();

*/
