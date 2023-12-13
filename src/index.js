import dotenv from "dotenv";
import connectDB from "./db/data.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

// USE ANY ONE OF THIS CODE WHICH YOU LIKE

// ####### OPTION 1. #######

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🤖 Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection falied !!", err);
  });

// ###### OPTION 2. ######

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
