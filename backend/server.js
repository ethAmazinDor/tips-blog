const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const connectDB = require('./config/database')
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");

//use .env file
require("dotenv").config({ path: "./config/.env" });

//connect to database
connectDB()

//static folder
app.use(express.static("public"));


//body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//logging
app.use(logger("dev"));

//use forms for put/delete method
app.use(methodOverride("_method"));


app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);


//use flash messages
app.use(flash());

app.get('/', (req, res) => {
    res.send('its working')
})

app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
});