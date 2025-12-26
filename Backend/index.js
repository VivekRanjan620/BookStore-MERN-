// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// const app = express();
// dotenv.config();
// const PORT = process.env.PORT || 4000;
// const DBURI = process.env.mongoDBURL;

// import bookRoute from "./Route/book.route.js";
// import userRoute from "./Route/user.route.js";

// //middleware
// app.use(express.json());

// app.use(cors());
// //connect to db
// try {
//   mongoose.connect(DBURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("connected to mongodb");
// } catch (error) {
//   console.log("Error: ", error);
// }

// //Define routes
// app.use("/book", bookRoute);
// app.use("/user",userRoute);



// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// MongoDB connect
mongoose
  .connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("DB Error:", err));

// API routes
app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);

// ----- SERVE FRONTEND (VITE) -----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vite build folder
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Frontend/dist/index.html")
  );
});


export default app;
