import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const DBURI = process.env.mongoDBURL;

import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";

//middleware
app.use(express.json());

app.use(cors());
//connect to db
try {
  mongoose.connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error: ", error);
}

//Define routes
app.use("/book", bookRoute);
app.use("/user",userRoute);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
