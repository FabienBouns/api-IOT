require('dotenv').config()

const { createServer } = require("http");
const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')
const mongoDB = "mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.k5ug7.mongodb.net/sensor?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })

const app = express();
const server = createServer(app);

app.use(bodyParser.json())
app.use(cors())

app.use("/api", require("./routes/data"));

server.listen(1234, () => console.log(`Server started!`));