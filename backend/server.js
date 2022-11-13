const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");


app.use(express(json()))
app, use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World')
})