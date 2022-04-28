const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
// databse config
const connectDB = require("./config/connectDB");
connectDB();
// setting
app.use(express.json());
const cors = require("cors");
app.use(cors("http://localhost:3000"));
// routes
app.use("/api/person", require("./routes/personRoute"));
app.use("/api/movie", require("./routes/movieRoute"));
app.use("/api/posts", require("./routes/PostsRoute"));
app.use("/api/book", require("./routes/bookingRouter"));
app.use("/api/payment", require("./routes/paymentRouter"));
app.use("/api/program", require("./routes/programRoute"));
app.use("/api/seats", require("./routes/seatsRouter"));

// images path
app.use("/uploads", express.static(path.join(__dirname, "../", "img-uploads")));
// run front end with server on localhost:5000
app.use(express.static(path.join(__dirname, "../", "client","build")))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, "../", "client","build","index.html"));
})
// config server
app.listen(process.env.PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is running on port ${process.env.PORT}`);
});
