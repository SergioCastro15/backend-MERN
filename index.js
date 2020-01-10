const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");
const app = express();


// conect to mongoDB
const uri = 'mongodb+srv://admin:mern@crud-mern-movies-6ttax.mongodb.net/test?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose.connect(uri, options);


// middelwares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", routes());

// run server
app.listen(4000, () => {
  console.log("servidor funcionando");
});