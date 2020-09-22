const express = require("express");

const connectDB = require("./config/connectDB");

const app = express();

const authRouter = require("./routes/auth");

//middleWares
app.use(express.json());

//start the server
connectDB();

//routes
app.use("/api/auth", authRouter);

//lunch the Server
const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Serveris Running on port ${port}....`);
});
