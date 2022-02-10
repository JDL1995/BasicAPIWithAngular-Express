const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");


const postRoutes = require("./routes/posts");



//const userRoutes = require("./routes/user");
//const adminRoutes = require("./routes/admin");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {


  //console.log(req.headers);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Headers","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
 // res.setHeader("Access-Control-Expose-Headers");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  /*
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.send(200);
  }*/

  /*
  if ('GET' === req.method) {
    //respond with 200
    res.send(200);
  }*/

  next();
});




app.use("/api", postRoutes);




//app.use("/api/admin", adminRoutes);


module.exports = app;
